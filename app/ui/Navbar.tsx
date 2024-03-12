'use client';

import Link from 'next/link';
import NetflixLogo from '/public/netflix_logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  { name: 'Home', href: '/home' },
  { name: 'TV Shows', href: '/home/shows' },
  { name: 'Movies', href: '/home/movies' },
  { name: 'Recently Added', href: '/home/recently' },
  { name: 'My List', href: '/home/user/list' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-5 lg:px-8">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image
            priority
            src={NetflixLogo}
            alt="Netflix logo"
            width={128}
            height={32}
          />
        </Link>
        <ul className="ml-14 hidden gap-x-4 md:flex">
          {links.map(({ name, href }) => (
            <div key={name}>
              <li>
                <Link
                  href={href}
                  className={clsx({
                    'font-semibold text-white underline': pathname === href,
                    'text-sm font-normal text-gray-300': pathname !== href,
                  })}
                >
                  {name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
