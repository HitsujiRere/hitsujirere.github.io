import { useRouter } from 'next/router';
import { HeaderLink } from '@/components/molecules/HeaderLink';

export const Header = () => {
  const router = useRouter();

  return (
    <div className='w-screen bg-transparent p-4 md:flex md:items-center md:justify-between md:px-8'>
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
    </div>
  );
};
