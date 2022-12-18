import { useRouter } from 'next/router';
import { HeaderLink } from '@/components/molecules/HeaderLink';

export const Header = () => {
  const router = useRouter();

  return (
    <div className='hidden px-[5vw] pt-8 sm:flex sm:items-center sm:justify-between'>
      <HeaderLink to={router.pathname === '/' ? 'start' : ''}>
        <p className='text-2xl font-bold text-gray-800'>Hitsuji Rere</p>
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
  );
};
