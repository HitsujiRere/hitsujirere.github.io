import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-900 flex justify-between items-center p-8">
      <Link href='/'>
        <a className='text-xl font-bold text-white'>
          <h1>Rere{"'"}s Portfolio</h1>
        </a>
      </Link>

      <nav className='hidden md:flex gap-10'>
        <Link href='/#about'>
          <a className='text-xl font-bold text-gray-200'>
            ABOUT
          </a>
        </Link>
        <Link href='/#profile'>
          <a className='text-xl font-bold text-gray-200'>
            PROFILE
          </a>
        </Link>
        <Link href='/#works'>
          <a className='text-xl font-bold text-gray-200'>
            WORKS
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
