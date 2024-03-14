import prisma from './db';
import { MovieCategory } from './definitions';

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

export async function fetchRecentlyAdded() {
  const data = await prisma.movie.findMany({
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
