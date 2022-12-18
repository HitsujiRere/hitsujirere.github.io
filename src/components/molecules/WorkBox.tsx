import classNames from 'classnames';
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
        className={classNames(
          'aspect-[4/3] w-full',
          props.size,
          props.position,
          { 'bg-gray-100': props.size === 'object-contain' },
          { 'duration-500 hover:scale-110': props.href },
        )}
        alt='cover image'
        loading='lazy'
      />
    </div>
  );

  return props.href ? <Link href={props.href}>{inner}</Link> : inner;
};

export const WorkBoxText = (props: { href?: string; children?: ReactNode }) => {
  const inner = (
    <div className='overflow-hidden rounded-xl'>
      <div
        className={classNames('flex aspect-[4/3] w-full items-center bg-gray-100 p-4', {
          'duration-500 hover:scale-110': props.href,
        })}
      >
        <div className='w-full select-none space-y-5 text-center'>{props.children}</div>
      </div>
    </div>
  );

  return props.href ? <Link href={props.href}>{inner}</Link> : inner;
};
