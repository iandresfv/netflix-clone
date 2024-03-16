import { authOptions } from '@/app/lib/auth';
import { fetchWatchList } from '@/app/lib/data';
import { MovieCategory } from '@/app/lib/definitions';
import MovieLayout from '@/app/ui/MovieLayout';
import { getServerSession } from 'next-auth';

export default async function WatchList() {
  const session = await getServerSession(authOptions);
  const data = await fetchWatchList(session?.user?.email as string);

  return (
    <>
      <h1 className="mt-10 px-5 text-4xl font-bold text-white underline sm:px-0">
        Your Watchlist
      </h1>
      <MovieLayout data={data as unknown as MovieCategory[]} />
    </>
  );
}
