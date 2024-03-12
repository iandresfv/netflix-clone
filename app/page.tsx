import { Button } from '@/components/ui/button';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/auth';
import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center p-20">
      <h1>This is a Netflix clone app</h1>
      <Button className="m-2">A button from shadcn/ui</Button>
      <h1>{session?.user?.name}</h1>
      <Image
        src={session?.user?.image as string}
        alt="Netflix Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
