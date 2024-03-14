import { fetchMovie } from '@/app/lib/data';
import MovieButtons from './MovieButtons';

export default async function MovieVideo() {
  const data = await fetchMovie();

  return (
    <div className="flex h-[55vh] w-full items-center justify-start lg:h-[60vh]">
      <video
        loop
        muted
        autoPlay
        src={data?.videoSource}
        poster={data?.imageString}
        className="absolute left-0 top-0 -z-10 h-[60vh] w-full object-cover brightness-[60%]"
      />
      <div className="absolute mx-auto w-[90%] lg:w-[40%]">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {data?.title}
        </h1>
        <p className="mt-5 line-clamp-3 text-lg text-white">{data?.overview}</p>
        <div className="mt-4 flex gap-x-3">
          <MovieButtons
            key={data?.id}
            age={data?.age as number}
            title={data?.title as string}
            release={data?.release as number}
            duration={data?.duration as number}
            overview={data?.overview as string}
            youtubeUrl={data?.youtubeString as string}
          />
        </div>
      </div>
    </div>
  );
}
