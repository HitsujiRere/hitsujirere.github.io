import { useRouter } from 'next/router';
import { HeaderLink } from '@/components/molecules/HeaderLink';

export const Header = () => {
  const router = useRouter();

  return (
    <div className='flex py-2 px-[5vw] max-sm:border-b max-sm:border-y-zinc-100 max-sm:backdrop-blur sm:items-center sm:justify-between sm:py-8'>
      <HeaderLink to={router.pathname === '/' ? 'start' : ''}>
        <p className='text-xl font-bold text-gray-800 sm:text-2xl'>Hitsuji Rere</p>
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
