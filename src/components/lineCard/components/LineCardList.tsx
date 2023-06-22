import { ReactNode } from 'react';

export const LineCardList = ({ children }: { children: ReactNode }) => {
  return <ul className='flex flex-col items-start gap-4'>{children}</ul>;
};
