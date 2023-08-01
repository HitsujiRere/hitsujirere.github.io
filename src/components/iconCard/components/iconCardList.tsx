import { ReactNode } from 'react';

export const IconCardList = ({ children }: { children: ReactNode }) => {
  return <ul className='flex flex-wrap gap-4'>{children}</ul>;
};
