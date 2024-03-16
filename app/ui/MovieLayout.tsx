import Image from 'next/image';
import { MovieCategory } from '../lib/definitions';
import MovieCard from './MovieCard';

export default function MovieLayout({ data }: { data: MovieCategory[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map(
        ({
          id,
          imageString,
          title,
          overview,
          WatchLists,
          youtubeString,
          age,
          release,
          duration,
        }) => (
          <div key={id} className="relative h-48">
            <Image
              alt={title}
              width={500}
              height={400}
              src={imageString}
              className="absolute w-full rounded-sm object-cover"
            />
            <div className="relative z-10 h-60 w-full transform cursor-pointer opacity-0 transition duration-500 hover:scale-125 hover:opacity-100">
              <div className="z-10 flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-transparent via-black/50 to-black">
                <Image
                  src={imageString}
                  alt={title}
                  width={800}
                  height={800}
                  className="absolute -z-10 h-full w-full rounded-lg object-cover"
                />
                <MovieCard
                  age={age}
                  movieId={id}
                  title={title}
                  release={release}
                  overview={overview}
                  duration={duration}
                  youtubeUrl={youtubeString}
                  watchListId={WatchLists[0]?.id}
                  watchList={WatchLists.length > 0}
                />
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
