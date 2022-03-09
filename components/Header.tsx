import type { NextPage } from 'next'
import Link from 'next/link'

const Header: NextPage = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <Link href='/'>
        <a className='text-2xl font-bold'>
          <h1>Hitsuji Rere</h1>
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
      </nav>
    </header>
  );
}

export default Header;
