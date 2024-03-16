export type MovieCategory = {
  id: number;
  imageString: string;
  title: string;
  age: number;
  duration: number;
  overview: string;
  release: number;
  youtubeString: string;
  WatchLists: {
    id: string;
    userId: string;
    movieId: number | null;
  }[];
};
