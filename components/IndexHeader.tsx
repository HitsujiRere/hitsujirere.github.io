import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image';
import { Link as Scroll } from 'react-scroll';

const IndexHeader: NextPage = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <Link href='/'>
        <a className='text-2xl font-bold'>
          <p>
            <Image src='/images/rere.png' width={50} height={50} alt='character'/>
            Hitsuji Rere
          </p>
        </a>
      </Link>

      <nav className='hidden md:flex gap-10'>
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
