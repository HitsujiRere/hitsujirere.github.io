import { FloatBoxSketch } from '../organisms/FloatBoxSketch';

export const Start = () => {
  return (
    <div id='start'>
      <FloatBoxSketch />

      <div className='h-screen mx-auto max-w-screen-lg bg-transparent flex items-center px-4'>
        <div className='space-y-5'>
          <h2 className='text-2xl font-light text-yellow-400'>Let{"'"}s go!</h2>
          <p className='text-5xl font-bold text-white'>What will we make with a computer?</p>
          <div>
            <p className='text-xl font-bold text-gray-400'>Hello!</p>
            <p className='text-xl font-bold text-gray-400'>
              I{"'"}m a student studying to become a computer programmer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
