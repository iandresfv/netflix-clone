import Navbar from '@/app/ui/home/Navbar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { authOptions } from '../lib/auth';

export default async function layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</main>
    </>
  );
}
