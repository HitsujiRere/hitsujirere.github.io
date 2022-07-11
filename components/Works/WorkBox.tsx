import Link from 'next/link';
import { ReactNode } from 'react';

const WorkBoxImage = (props: { href?: string; image: string; size: string; position: string }) => {
  return props.href ? (
    <Link href={props.href}>
      <a className='h-60 '>
        <img
          src={props.image}
          className={`h-full w-full rounded-xl ${props.size} ${props.position} ${
            props.size === 'object-contain' && 'bg-gray-100'
          }`}
          alt='cover image'
          loading='lazy'
        />
      </a>
    </Link>
  ) : (
    <div className='h-60'>
      <img
        src={props.image}
        className={`h-full w-full rounded-xl ${props.size} ${props.position} ${
          props.size === 'object-contain' && 'bg-gray-100'
        }`}
        alt='cover image'
        loading='lazy'
      />
    </div>
  );
};

const WorkBoxText = (props: { href?: string; children?: ReactNode }) => {
  return props.href ? (
    <Link href={props.href}>
      <a className='h-60 p-4 rounded-xl bg-gray-100 flex items-center'>
        <div className='w-full text-center space-y-5 select-none'>{props.children}</div>
      </a>
    </Link>
  ) : (
    <div className='h-60 p-4 rounded-xl bg-gray-100 flex items-center'>
      <div className='w-full text-center space-y-5 select-none'>{props.children}</div>
    </div>
  );
};

export { WorkBoxImage, WorkBoxText };
