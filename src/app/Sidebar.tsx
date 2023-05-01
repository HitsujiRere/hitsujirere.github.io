'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { MdArrowBackIosNew } from 'react-icons/md';

const SidebarLink = (props: { href: string; children: ReactNode }) => {
  const path = usePathname();

  return (
    <li className='space-x-2 text-3xl font-bold'>
      <Link href={props.href}>{props.children}</Link>
      <span
        className={classNames(
          'transition-opacity',
          path === props.href ? 'opacity-100' : 'opacity-0',
        )}
      >
        🐏
      </span>
    </li>
  );
};

export const Sidebar = () => {
  const [opened, setOpened] = useState(true);
  const path = usePathname();

  const width = () => {
    if (!opened) {
      return 'w-0';
    } else if (path === '/') {
      return 'w-[calc(max(300px,40vw))]';
    } else {
      return 'w-[300px]';
    }
  };

  return (
    <div className='relative mr-[calc(tan(5deg)*50vh)] pr-[calc(tan(5deg)*50vh)]'>
      <nav
        className={classNames(
          'relative z-10 flex h-screen items-center justify-center overflow-hidden transition-[width] duration-700 ease-out',
          width(),
        )}
      >
        <nav className='flex min-w-max flex-col gap-12'>
          <Link href='/' className='text-4xl font-black text-black'>
            ひつじれれ
          </Link>
          <ul className='ml-4 flex flex-col gap-8'>
            <SidebarLink href='/about'>ABOUT</SidebarLink>
            <SidebarLink href='/works'>WORKS</SidebarLink>
          </ul>
        </nav>
      </nav>

      <div className='absolute right-0 top-4 z-20 translate-x-1/2'>
        <div
          className={classNames(
            'cursor-pointer rounded-full border-2 border-stone-300 bg-stone-100 p-2 transition-[background-color] duration-700 hover:bg-stone-200',
          )}
          onClick={() => {
            setOpened((x) => !x);
          }}
        >
          <MdArrowBackIosNew
            size='1.5rem'
            className={classNames('text-gray-500 transition-transform duration-500', {
              'rotate-z-0': opened,
              'rotate-z-180': !opened,
            })}
          />
        </div>
      </div>

      <div className='absolute right-0 top-0 h-screen w-[100vw] skew-x-[-5deg] bg-stone-50 shadow' />
    </div>
  );
};
