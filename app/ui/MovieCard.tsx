'use client';

import { Button } from '@/components/ui/button';
import { Heart, PlayCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { addToWatchList, removeFromWatchList } from '../lib/data';
import PlayVideoModal from './PlayVideoModal';

export default function MovieCard({
  age,
  title,
  release,
  movieId,
  duration,
  overview,
  watchList,
  youtubeUrl,
  watchListId,
}: {
  age: number;
  title: string;
  release: number;
  movieId: number;
  overview: string;
  duration: number;
  watchList: boolean;
  youtubeUrl: string;
  watchListId: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  return (
    <>
      <button className="-mt-14" onClick={() => setOpen(true)}>
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="absolute right-5 top-5 z-10">
        {watchList ? (
          <form action={removeFromWatchList}>
            <input type="hidden" name="watchListId" value={watchListId} />
            <input type="hidden" name="pathName" value={pathName} />
            <Button variant="outline" size="icon">
              <Heart className={'h-4 w-4 text-red-500'} />
            </Button>
          </form>
        ) : (
          <form action={addToWatchList}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathName" value={pathName} />
            <Button variant="outline" size="icon">
              <Heart className={'h-4 w-4'} />
            </Button>
          </form>
        )}
      </div>
      <div className="absolute bottom-0 left-0 p-5">
        <h1 className="line-clamp-1 text-lg font-bold">{title}</h1>
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-normal">{release}</p>
          <p className="rounded border border-gray-200 px-1 py-0.5 text-sm font-normal">
            {age}+
          </p>
          <p className="text-sm font-normal">{duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm font-light text-gray-200">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        age={age}
        open={open}
        title={title}
        release={release}
        setOpen={setOpen}
        duration={duration}
        overview={overview}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
