import Link from 'next/link';
import { MouseEventHandler, ReactNode, useEffect, useState } from 'react';

export const HeaderLink = (props: { to: string; children: ReactNode }) => {
  const [target, setTarget] = useState<HTMLElement | null>();

  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (target) {
      const headerOffset = 0;
      const targetPosition = target.getBoundingClientRect().top ?? 0;
      const offsetPosition = targetPosition - headerOffset + window.pageYOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      e.preventDefault();
    }
  };

  useEffect(() => {
    setTarget(document.getElementById(props.to));
  }, [props.to, target]);

  return (
    <Link href={props.to ? `/#${props.to}` : '/'}>
      <a className='cursor-pointer' onClick={onClick}>
        {props.children}
      </a>
    </Link>
  );
};
