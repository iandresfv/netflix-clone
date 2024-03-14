import MovieVideo from '../ui/home/MovieVideo';
import RecentlyAdded from '../ui/home/RecentlyAdded';

export default function HomePage() {
  return (
    <>
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </>
  );
}
