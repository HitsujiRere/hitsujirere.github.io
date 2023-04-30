import { ReactNode } from 'react';

export const AwardBox = ({ children }: { children: ReactNode }) => {
  return (
    <li className='flex flex-wrap gap-x-4 gap-y-2 rounded border-2 border-gray-200 p-2'>
      {children}
    </li>
  );
};
