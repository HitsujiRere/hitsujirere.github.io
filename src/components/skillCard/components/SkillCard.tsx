import { ReactNode } from 'react';
import Image from 'next/image';
import { type IconType } from 'react-icons';
import { MdStar, MdStarBorder } from 'react-icons/md';

export const SkillCard = ({
  name,
  icon: Icon,
  iconColor,
  iconSrc,
  stars,
  children,
}: {
  name: string;
  icon?: IconType;
  iconColor?: string;
  iconSrc?: string;
  stars?: number;
  children?: ReactNode;
}) => {
  return (
    <div className='flex flex-col items-center justify-evenly gap-1 rounded border-2 p-2'>
      {Icon && <Icon size='2.5rem' color={iconColor} />}
      {iconSrc && (
        <div className='relative aspect-square h-10'>
          <Image fill src={iconSrc} alt={name} className='object-contain' />
        </div>
      )}

      <p>{name}</p>

      {stars && (
        <div className='flex justify-center'>
          {[1, 2, 3, 4, 5].map((star) =>
            star <= stars! ? (
              <MdStar key={star} size='1rem' className='text-yellow-500' />
            ) : (
              <MdStarBorder key={star} size='1rem' className='text-yellow-400' />
            ),
          )}
        </div>
      )}

      {children}
    </div>
  );
};
