import prisma from './db';
import { Movie } from './definitions';

export async function fetchMovies(): Promise<Movie | null> {
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
    },
  });
  return data;
}
