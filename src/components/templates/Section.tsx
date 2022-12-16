import classNames from 'classnames';
import { createRef, ReactNode, useEffect, useState } from 'react';

export const Section = (props: { children?: ReactNode; id: string }) => {
  const page = createRef<HTMLDivElement>();
  const [watching, setWatching] = useState(false);

  const checkWatching = () => {
    const mid = window.screenY + window.innerHeight / 2;
    const { top, bottom } = page.current?.getBoundingClientRect() ?? { top: 0, bottom: 0 };
    if (top <= mid && mid <= bottom) {
      setWatching(true);
    } else {
      setWatching(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkWatching);
  });

  return (
    <div
      ref={page}
      id={props.id}
      className={classNames(
        'px-4 py-20',
        { 'bg-gray-800': watching, 'bg-gray-900': !watching },
        'duration-500',
      )}
    >
      <div className='mx-auto max-w-screen-lg'>{props.children}</div>
    </div>
  );
};
