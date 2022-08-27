import Link from 'next/link';
import { ReactNode } from 'react';

export const WorkBoxImage = (props: {
  href?: string;
  image: string;
  size: string;
  position: string;
}) => {
  const inner = (
    <img
      src={props.image}
      className={`h-60 w-full rounded-xl ${props.size} ${props.position} ${
        props.size === 'object-contain' && 'bg-gray-100'
      }`}
      alt='cover image'
      loading='lazy'
    />
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
    <div className='h-60 p-4 rounded-xl bg-gray-100 flex items-center'>
      <div className='w-full text-center space-y-5 select-none'>{props.children}</div>
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
