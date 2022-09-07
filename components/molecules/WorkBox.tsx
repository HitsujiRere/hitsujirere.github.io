import Link from 'next/link';
import { ReactNode } from 'react';

export const WorkBoxImage = (props: {
  href?: string;
  image: string;
  size: string;
  position: string;
}) => {
  const inner = (
    <div className='overflow-hidden rounded-xl'>
      <img
        src={props.image}
        className={`h-60 w-full duration-500 hover:scale-110 ${props.size}
          ${props.position} ${props.size === 'object-contain' && 'bg-gray-100'}`}
        alt='cover image'
        loading='lazy'
      />
    </div>
  );

  return props.href ? (
    <Link href={props.href}>
      <a>{inner}</a>
    </Link>
  ) : (
    inner
  );
};

export const WorkBoxText = (props: { href?: string; children?: ReactNode }) => {
  const inner = (
    <div className='overflow-hidden rounded-xl'>
      <div className='flex h-60 items-center bg-gray-100 p-4 duration-500 hover:scale-110'>
        <div className='w-full select-none space-y-5 text-center'>{props.children}</div>
      </div>
    </div>
  );

  return props.href ? (
    <Link href={props.href}>
      <a>{inner}</a>
    </Link>
  ) : (
    inner
  );
};
