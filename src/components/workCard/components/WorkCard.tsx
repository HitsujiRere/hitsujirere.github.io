import Image from 'next/image';
import classNames from 'classnames';
import { WrapLink } from '@/components/wrapLink';

export const WorkCard = ({
  title,
  comment,
  imageSrc,
  href,
}: {
  title: string;
  comment: string;
  imageSrc: string;
  href?: string;
}) => {
  return (
    <li>
      <WrapLink href={href}>
        <div
          className={classNames('rounded border-2 border-gray-200 bg-stone-50', {
            'shadow-md transition-transform hover:-translate-y-1': href,
          })}
        >
          <div className='space-y-1 p-2'>
            <p className='text-xl font-medium'>{title}</p>
            <p>{comment}</p>
          </div>
          <div className='relative aspect-video w-full border-t-2 border-gray-200'>
            <Image fill src={imageSrc} alt={title} className='object-cover' />
          </div>
        </div>
      </WrapLink>
    </li>
  );
};
