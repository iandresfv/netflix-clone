import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import SignInButton from '@/app/ui/SignInButton';
import { GithubIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GoogleIcon from '/public/google.svg';

export default function Login() {
  return (
    <div className="mt-24 rounded bg-black/80 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Sign In</h1>
        <div className="mt-5 space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="inline-block w-full bg-[#333] placeholder:text-xs placeholder:text-gray-400"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="inline-block w-full bg-[#333] placeholder:text-xs placeholder:text-gray-400"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Sign In
          </Button>
        </div>
      </form>

      <div className="mt-2 text-sm text-gray-500">
        New to Netflix?{' '}
        <Link href="/sign-up" className="text-white hover:underline">
          Sign up now.
        </Link>
      </div>

      <div className="mt-6 flex w-full items-center justify-center gap-x-3">
        <SignInButton provider="github">
          <GithubIcon className="h-4 w-4" />
        </SignInButton>
        <SignInButton provider="google">
          <Image src={GoogleIcon} alt="Google Icon" className="h-6 w-6" />
        </SignInButton>
      </div>
    </div>
  );
}
