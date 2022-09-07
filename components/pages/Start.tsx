import { H2 } from '@/components/atoms/H2';
import { FloatBoxSketch } from '@/components/organisms/FloatBoxSketch';

export const Start = () => {
  return (
    <div id='start'>
      <FloatBoxSketch />

      <div className='mx-auto flex h-screen max-w-screen-lg items-center bg-transparent px-4'>
        <div className='space-y-5'>
          <H2 title="Let's go!" />
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
