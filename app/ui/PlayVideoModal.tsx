import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function PlayVideoModal({
  age,
  open,
  title,
  release,
  setOpen,
  duration,
  overview,
  youtubeUrl,
}: {
  age: number;
  title: string;
  open: boolean;
  release: number;
  duration: number;
  overview: string;
  youtubeUrl: string;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="max-w-[425px] md:max-w-[525px] lg:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex items-center gap-x-2">
            <p className="text-sm font-normal">{release}</p>
            <p className="rounded border border-gray-200 px-1 py-0.5 text-sm font-normal">
              {age}+
            </p>
            <p className="text-sm font-normal">{duration}h</p>
          </div>
        </DialogHeader>
        <iframe
          allowFullScreen
          src={youtubeUrl}
          className="h-[250px] w-full md:h-[300px] lg:h-[350px]"
        />
      </DialogContent>
    </Dialog>
  );
}
