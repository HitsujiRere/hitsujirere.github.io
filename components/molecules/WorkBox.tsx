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
        className={`w-full h-60 hover:scale-110 duration-500 ${props.size}
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
      <div className='h-60 p-4 hover:scale-110 duration-500 bg-gray-100 flex items-center'>
        <div className='w-full text-center space-y-5 select-none'>{props.children}</div>
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
