'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { ReactNode } from 'react';

export default function SignInButton({
  provider,
  children,
}: {
  provider: string;
  children: ReactNode;
}) {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn(provider)}>
      {children}
    </Button>
  );
}
