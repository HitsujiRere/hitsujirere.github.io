import { useState } from 'react';
import { H2 } from '@/components/atoms/H2';
import { WorkBoxImage, WorkBoxText } from '@/components/molecules/WorkBox';
import { Section } from '@/components/templates/Section';

export const Works = () => {
  const [isDetailsOpened, setDetailsOpened] = useState(false);

  return (
    <Section id='works'>
      <H2 title='WORKS' />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[5vw]'>
        <WorkBoxImage
          href='/works/time-calc'
          image='/img/time-calc.png'
          size='object-cover'
          position='object-top'
        />
        <WorkBoxImage
          href='/works/my-webpage'
          image='/img/my-webpage.png'
          size='object-cover'
          position='object-top'
        />
        <WorkBoxImage
          href='/works/logic-connect-block'
          image='/img/LogicConnectBlock/cover.jpg'
          size='object-cover'
          position='object-center'
        />
        <WorkBoxImage
          href='/works/oshaberu'
          image='/img/oshaberu/logo.png'
          size='object-contain'
          position='object-center'
        />
        <WorkBoxImage
          href='/works/twattaa'
          image='/img/twattaa/1.png'
          size='object-cover'
          position='object-top'
        />
        <WorkBoxImage
          href='/works/learn-processing'
          image='/img/LearnProcessing.png'
          size='object-cover'
          position='object-top object-left'
        />
        {isDetailsOpened ? (
          <>
            <WorkBoxText>
              <p className='text-7xl text-black'>Fall Texts</p>
              <p className='text-xl  text-black'>みんなで言葉を降らせよう</p>
            </WorkBoxText>
            <WorkBoxImage
              image='/img/shimale_logo.png'
              size='object-contain'
              position='object-center'
            />
            <WorkBoxImage image='/img/siritoriVS.jpg' size='object-cover' position='object-top' />
            <WorkBoxImage
              image='/img/HexCalcurator.png'
              size='object-cover'
              position='object-top'
            />
            <WorkBoxImage
              image='/img/just10game.png'
              size='object-cover'
              position='object-center'
            />
            <WorkBoxImage image='/img/yudetamago2.png' size='object-cover' position='object-top' />
          </>
        ) : (
          <div className='overflow-hidden rounded-xl border-2 border-gray-300 md:col-span-2'>
            <button
              className='flex h-20 w-full items-center justify-center p-4 duration-500 hover:scale-110'
              onClick={() => setDetailsOpened(!isDetailsOpened)}
            >
              <p className='select-none text-2xl'>MORE</p>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};
