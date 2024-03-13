import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { authOptions } from '../lib/auth';

export default async function layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  return <>{children}</>;
}
