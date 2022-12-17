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

        <nav>
          <ul className='hidden sm:flex sm:gap-10'>
            <li className='text-xl font-bold text-gray-800'>
              <HeaderLink to='about'>ABOUT</HeaderLink>
            </li>
            <li className='text-xl font-bold text-gray-800'>
              <HeaderLink to='profile'>PROFILE</HeaderLink>
            </li>
            <li className='text-xl font-bold text-gray-800'>
              <HeaderLink to='works'>WORKS</HeaderLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
