import { authOptions } from '@/app/lib/auth';
import { fetchMoviesByCategory } from '@/app/lib/data';
import { getServerSession } from 'next-auth';

export default async function Categorypage({
  params: { genre },
}: {
  params: { genre: string };
}) {
  const movieCategory = genre === 'recently' ? 'recent' : genre.slice(0, -1);
  const session = await getServerSession(authOptions);
  const data = await fetchMoviesByCategory(movieCategory, 'abc');

  return (
    <div>
      {data.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
}