import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

export const HeaderLink = (props: { to: string; children: ReactNode }) => {
  const [target, setTarget] = useState<HTMLElement | null>();

  useEffect(() => {
    setTarget(document.getElementById(props.to));
  }, [props.to, target]);

  return (
    <Link href={`/#${props.to}`}>
      <a
        className='cursor-pointer'
        onClick={(e) => {
          if (target) {
            const scapegoat = document.getElementById('scroll-scapegoat');

            target.id = '';
            console.log(scapegoat);
            if (scapegoat) {
              scapegoat.id = props.to;
            }

            location.hash = `#${props.to}`;

            target.id = props.to;
            if (scapegoat) {
              scapegoat.id = 'scroll-scapegoat';
            }

            const headerOffset = 0;
            const targetPosition = target.getBoundingClientRect().top ?? 0;
            const offsetPosition = targetPosition - headerOffset + window.pageYOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });

            e.preventDefault();
          }
        }}
      >
        {props.children}
      </a>
    </Link>
  );
};
