import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 z-10 p-2'>
      <nav className='mx-auto flex max-w-3xl items-end justify-center gap-16 rounded border-2 border-stone-200 bg-stone-50 p-4 shadow-md'>
        <Link href='/' className='text-3xl font-black text-black'>
          Hitsuji.rere
        </Link>
        <ul className='flex gap-8'>
          <Link href='/works' className='text-2xl'>
            WORKS
          </Link>
        </ul>
      </nav>
    </header>
  );
};
