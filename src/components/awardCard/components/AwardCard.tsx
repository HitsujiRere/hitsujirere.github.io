import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import classNames from 'classnames';
import { WrapLink } from '@/components/wrapLink';

export const AwardCard = ({
  href,
  target,
  children,
}: {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => {
  return (
    <li>
      <WrapLink href={href} target={target}>
        <div
          className={classNames(
            'flex h-full flex-wrap gap-x-4 gap-y-2 rounded border-2 border-stone-200 bg-stone-50 p-2',
            { 'shadow-md transition-transform hover:-translate-y-1': href },
          )}
        >
          {children}
        </div>
      </WrapLink>
    </li>
  );
};
