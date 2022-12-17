import { useRouter } from 'next/router';
import { HeaderLink } from '@/components/molecules/HeaderLink';

export const Header = () => {
  const router = useRouter();

  return (
    <header className='fixed top-0 left-0 right-0 z-10 mx-[5vw] mt-8 hidden sm:block'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <HeaderLink to={router.pathname === '/' ? 'start' : ''}>
          <h1 className='text-2xl font-bold text-gray-800'>Hitsuji Rere</h1>
        </HeaderLink>

        <nav className='hidden sm:flex sm:gap-10'>
          <HeaderLink to='about'>
            <p className='text-xl font-bold text-gray-800'>ABOUT</p>
          </HeaderLink>
          <HeaderLink to='profile'>
            <p className='text-xl font-bold text-gray-800'>PROFILE</p>
          </HeaderLink>
          <HeaderLink to='works'>
            <p className='text-xl font-bold text-gray-800'>WORKS</p>
          </HeaderLink>
        </nav>
      </div>
    </header>
  );
};
