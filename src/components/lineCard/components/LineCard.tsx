import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { WrapLink } from '@/components/wrapLink';

export const LineCard = ({ href, children }: { href?: string; children: ReactNode }) => {
  return (
    <li>
      <WrapLink href={href}>
        <div
          className={twMerge(
            'flex h-full flex-wrap gap-x-4 gap-y-2 rounded border-2 border-stone-200 bg-stone-50 p-2',
            href !== undefined && 'shadow-md transition-transform hover:-translate-y-1',
          )}
        >
          {children}
        </div>
      </WrapLink>
    </li>
  );
};
