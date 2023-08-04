import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { WrapLink } from '@/components/wrapLink';

export const WorkCard = ({
  title,
  comment,
  imageSrc,
  href,
}: {
  title: string;
  comment: string;
  imageSrc?: string;
  href?: string;
}) => {
  return (
    <li>
      <WrapLink href={href}>
        <div
          className={twMerge(
            'flex aspect-square flex-col rounded border-2 border-gray-200 bg-stone-50',
            href && 'shadow-md transition-transform hover:-translate-y-1',
          )}
        >
          <div className={twMerge('space-y-1 p-2', !imageSrc && 'flex-1')}>
            <p className='text-xl font-medium'>{title}</p>
            <p>{comment}</p>
          </div>
          {imageSrc && (
            <div className='relative flex-1 border-t-2 border-gray-200'>
              <Image fill src={imageSrc} alt={title} className='object-contain' />
            </div>
          )}
        </div>
      </WrapLink>
    </li>
  );
};
