export const Start = () => {
  return (
    <div id='start' className='mx-[10vw] flex h-screen items-center bg-transparent px-4'>
      <div className='space-y-4'>
        <div className='flex items-end gap-8'>
          <h1 className='text-5xl font-bold tracking-tight text-amber-500'>Hitsuji Rere</h1>
          <img src='/img/myself.png' className='h-16 w-auto' alt='My picture' />
        </div>
        <p className='text-xl text-gray-500'>
          I&apos;m a student learning to become a computer programmer.
        </p>
      </div>
    </div>
  );
};
