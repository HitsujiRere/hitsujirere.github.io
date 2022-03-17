import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image';

const Header: NextPage = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <Link href='/'>
        <a className='text-2xl font-bold'>
          <h1>
            <Image src='/images/rere.png' width={50} height={50} alt='character'/>
            Hitsuji Rere
          </h1>
        </a>
      </Link>

      <nav className='flex gap-10'>
        <Link href='/#about'>
          <a className='text-lg font-bold'>
            About
          </a>
        </Link>
        <Link href='/#skill'>
          <a className='text-lg font-bold'>
            Skill
          </a>
        </Link>
        <Link href='/#awards'>
          <a className='text-lg font-bold'>
            Awards
          </a>
        </Link>
        <Link href='/#products'>
          <a className='text-lg font-bold'>
            Products
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
