'use client';

import { Button } from '@/components/ui/button';
import { InfoIcon, PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';
import PlayVideoModal from '../PlayVideoModal';

export default function MovieButtons({
  age,
  title,
  release,
  duration,
  overview,
  youtubeUrl,
}: {
  age: number;
  title: string;
  release: number;
  duration: number;
  overview: string;
  youtubeUrl: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button className="text-lg font-medium" onClick={() => setOpen(true)}>
        <PlayCircleIcon className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="bg-white/40 text-lg font-medium text-white hover:bg-white/20 "
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>
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
