import { fetchRecentlyAdded } from '@/app/lib/data';
import MovieLayout from '../MovieLayout';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

export default async function RecentlyAdded() {
  const sessoion = await getServerSession(authOptions);
  const data = await fetchRecentlyAdded(sessoion?.user?.email as string);
  return <MovieLayout data={data} />;
}
