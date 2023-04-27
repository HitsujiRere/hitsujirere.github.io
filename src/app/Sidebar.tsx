'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

const SidebarLink = (props: { href: string; children: ReactNode }): JSX.Element => {
  return (
    <li className='space-x-2'>
      <span className='text-3xl font-bold'>・</span>
      <Link href={props.href} className='text-3xl font-bold'>
        {props.children}
      </Link>
    </li>
  );
};

export const Sidebar = (): JSX.Element => {
  const [opened, setOpened] = useState(true);

  const width = () => {
    if (!opened) {
      return 'w-0';
    } else if (usePathname() === '/') {
      return 'w-[calc(max(280px,40vw))]';
    } else {
      return 'w-[calc(max(280px,25vw))]';
    }
  };

  return (
    <div className='relative mr-[calc(tan(5deg)*50vh)] pr-[calc(tan(5deg)*50vh)]'>
      <nav
        className={classNames(
          'relative z-10 flex h-screen items-center justify-center overflow-hidden transition-[width]',
          width(),
        )}
      >
        <nav className='flex min-w-[240px] flex-col gap-12'>
          <Link href='/' className='text-5xl font-bold text-black'>
            ひつじれれ
          </Link>
          <ul className='flex flex-col gap-8'>
            <SidebarLink href='/about'>ABOUT</SidebarLink>
            <SidebarLink href='/works'>WORKS</SidebarLink>
          </ul>
        </nav>
      </nav>

      <div className='absolute right-0 top-4 z-20 translate-x-1/2'>
        <div
          className={classNames(
            'cursor-pointer rounded-full border-2 border-stone-300 bg-stone-100 p-2 transition-[background-color] duration-1000 hover:bg-stone-200',
          )}
          onClick={() => {
            setOpened((x) => !x);
          }}
        >
          <MdArrowBackIosNew
            size='1.5rem'
            className={classNames('text-gray-500 transition-transform duration-300', {
              'rotate-0': opened,
              '-rotate-180': !opened,
            })}
          />
        </div>
      </div>

      <div className='absolute right-0 top-0 h-screen w-[100vw] skew-x-[-5deg] bg-stone-50 shadow' />
    </div>
  );
};
