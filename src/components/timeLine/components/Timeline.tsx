import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export const Timeline = ({ className, ...rest }: ComponentPropsWithoutRef<'ol'>) => {
  return (
    <ol className={classNames('space-y-4 border-l-4 border-l-green-500', className)} {...rest} />
  );
};
