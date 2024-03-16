import { fetchRecentlyAdded } from '@/app/lib/data';
import MovieLayout from '../MovieLayout';

export default async function RecentlyAdded() {
  const data = await fetchRecentlyAdded();
  return <MovieLayout data={data} />;
}
