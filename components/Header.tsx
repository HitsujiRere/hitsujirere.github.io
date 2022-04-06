import { ReactNode, createRef, useEffect, useState } from 'react'
import Link from 'next/link'

const HeaderLink = (props: {to: string, children: ReactNode}) => {
  const [target, setTarget] = useState<HTMLElement | null>();

  useEffect(() => {
    setTarget(document.getElementById(props.to));
  }, [props.to, target]);

  return (
    // <Link href={`/${props.to}`}>
    //   <a>{props.children}</a>
    // </Link>
    <a
      href={`#${props.to}`}
      className='cursor-pointer'
      onClick={(e) => {
        if (target) {
          const scapegoat = document.getElementById("scroll-scapegoat");

          target.id = "";
          console.log(scapegoat);
          if (scapegoat) {
            scapegoat.id = props.to;
          }

          location.hash = `#${props.to}`;

          target.id = props.to;
          if (scapegoat) {
            scapegoat.id = "scroll-scapegoat";
          }

          const headerOffset = 0;
          const targetPosition = target.getBoundingClientRect().top ?? 0;
          const offsetPosition = targetPosition - headerOffset + window.pageYOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });

          e.preventDefault();
        }
      }}
    >
      {props.children}
    </a>
  );
}

const Header = () => {
  const ref = createRef();

  return (
    <>
      <div id="scroll-scapegoat" className='fixed'></div>

      <header className="w-screen p-8 bg-gray-900 md:bg-transparent md:fixed md:flex md:justify-between md:items-center md:z-10">
        <HeaderLink to='start'>
          <h1 className='text-xl font-bold text-white'>Rere{"'"}s Portfolio</h1>
        </HeaderLink>

        <nav className='hidden md:flex md:gap-10'>
          <HeaderLink to='about'>
            <p className='text-xl font-bold text-gray-200'>ABOUT</p>
          </HeaderLink>
          <HeaderLink to='profile'>
            <p className='text-xl font-bold text-gray-200'>PROFILE</p>
          </HeaderLink>
          <HeaderLink to='works'>
            <p className='text-xl font-bold text-gray-200'>WORKS</p>
          </HeaderLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
