import { useRouter } from 'next/router';
import { HeaderLink } from '@/components/molecules/HeaderLink';

export const Header = () => {
  const router = useRouter();

  return (
    <header className='w-screen bg-gray-900 p-8 md:fixed md:z-10 md:flex md:items-center md:justify-between md:bg-transparent'>
      <HeaderLink to={router.pathname === '/' ? 'start' : ''}>
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
  );
};
