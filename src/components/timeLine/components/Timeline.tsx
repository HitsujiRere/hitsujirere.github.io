import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Timeline = ({ className, ...rest }: ComponentPropsWithoutRef<'ol'>) => {
  return <ol className={twMerge('space-y-4 border-l-4 border-l-green-500', className)} {...rest} />;
};
