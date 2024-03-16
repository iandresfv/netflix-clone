'use server';
import { revalidatePath } from 'next/cache';
import prisma from './db';
import { authOptions } from './auth';
import { getServerSession } from 'next-auth';

export async function fetchMovie() {
  const data = await prisma.movie.findFirst({
    select: {
      id: true,
      age: true,
      title: true,
      release: true,
      overview: true,
      duration: true,
      imageString: true,
      videoSource: true,
      youtubeString: true,
    },
  });
  return data;
}

export async function fetchRecentlyAdded(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      age: true,
      title: true,
      release: true,
      duration: true,
      overview: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
      imageString: true,
      youtubeString: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 4,
  });
  return data;
}

export async function fetchMoviesByCategory(category: string, userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      age: true,
      title: true,
      release: true,
      duration: true,
      overview: true,
      imageString: true,
      youtubeString: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
    },
    where: {
      category: category,
    },
  });
  return data;
}

export async function fetchWatchList(userId: string) {
  const data = await prisma.watchList.findMany({
    select: {
      id: true,
      Movie: {
        select: {
          id: true,
          age: true,
          title: true,
          release: true,
          duration: true,
          overview: true,
          WatchLists: true,
          imageString: true,
          youtubeString: true,
        },
      },
    },
    where: {
      userId: userId,
    },
  });
  return data.map((item) => item.Movie);
}

export async function addToWatchList(formData: FormData) {
  'use server';
  const pathName = formData.get('pathName') as string;
  const movieId = Number(formData.get('movieId') as string);
  const session = await getServerSession(authOptions);
  await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId,
    },
  });
  revalidatePath(pathName);
}

export async function removeFromWatchList(formData: FormData) {
  'use server';
  const pathName = formData.get('pathName') as string;
  const watchListId = formData.get('watchListId') as string;
  await prisma.watchList.delete({
    where: {
      id: watchListId,
    },
  });
  revalidatePath(pathName);
}
