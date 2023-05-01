import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export const TimelineItem = ({ className, ...rest }: ComponentPropsWithoutRef<'li'>) => {
  return (
    <li
      className={classNames(
        `relative pl-4 before:absolute before:inset-0 before:left-[-0.6em] before:aspect-square before:w-4
        before:rounded-full before:border-4 before:border-green-500 before:bg-white before:content-[""]`,
        className,
      )}
      {...rest}
    />
  );
};
