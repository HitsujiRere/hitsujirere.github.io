import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <>
      <div id='scroll-scapegoat' className='fixed'></div>

      <header className='w-screen p-8 bg-gray-900 md:bg-transparent md:fixed md:flex md:justify-between md:items-center md:z-10'>
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
