import { ReactNode } from 'react';
import Image from 'next/image';
import { type IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { WrapLink } from '@/components/wrapLink';

export type IconCardProps = {
  name: string;
  icon?: IconType;
  iconColor?: string;
  iconSrc?: string;
  href?: string;
  children?: ReactNode;
};

export const IconCard = ({
  name,
  icon: Icon,
  iconColor,
  iconSrc,
  href,
  children,
}: IconCardProps) => {
  return (
    <li>
      <WrapLink href={href}>
        <div
          className={twMerge(
            'flex h-full flex-col items-center justify-evenly gap-1 rounded border-2 border-stone-200 bg-stone-50 p-2',
            href !== undefined && 'shadow-md transition-transform hover:-translate-y-1',
          )}
        >
          {Icon && <Icon size='2.5rem' color={iconColor} />}
          {iconSrc && (
            <div className='relative aspect-square h-10'>
              <Image fill src={iconSrc} alt={name} className='object-contain' />
            </div>
          )}

          <p>{name}</p>
          {children}
        </div>
      </WrapLink>
    </li>
  );
};
