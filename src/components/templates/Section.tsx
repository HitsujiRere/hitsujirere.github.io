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
      className={classNames('border-y py-16 duration-300', {
        'border-y-zinc-100 backdrop-blur': watching,
        'border-y-transparent backdrop-blur-none': !watching,
      })}
    >
      <div className='mx-4 sm:mx-[10vw]'>{props.children}</div>
    </div>
  );
};
