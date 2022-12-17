export const Start = () => {
  return (
    <div id='start' className='mx-2 flex h-screen items-center bg-transparent px-4 sm:mx-[10vw]'>
      <div className='space-y-4'>
        <div className='flex flex-col-reverse sm:flex-row sm:items-end sm:gap-8'>
          <h1 className='text-5xl font-bold tracking-tight text-amber-500'>Hitsuji Rere</h1>
          <div>
            <img src='/img/myself.png' className='h-16 w-auto' alt='My picture' />
          </div>
        </div>
        <p className='text-xl text-gray-500'>
          I&apos;m a student learning to become a computer programmer.
        </p>
      </div>
    </div>
  );
};
