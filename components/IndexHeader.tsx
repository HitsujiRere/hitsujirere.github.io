import type { NextPage } from 'next'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll';

const IndexHeader: NextPage = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <Link href='/'>
        <a className='text-2xl font-bold'>
          <h1>Hitsuji Rere</h1>
        </a>
      </Link>

      <nav className='flex gap-10'>
        <Scroll
          to="about"
          smooth={true}
          duration={500}
          className='text-lg font-bold cursor-pointer'>
          About
        </Scroll>
        <Scroll
          to="skill"
          smooth={true}
          duration={500}
          className='text-lg font-bold cursor-pointer'>
          Skill
        </Scroll>
        <Scroll
          to="awards"
          smooth={true}
          duration={500}
          className='text-lg font-bold cursor-pointer'>
          Awards
        </Scroll>
        <Scroll
          to="products"
          smooth={true}
          duration={500}
          className='text-lg font-bold cursor-pointer'>
          Products
        </Scroll>
      </nav>
    </header>
  );
}

export default IndexHeader;
