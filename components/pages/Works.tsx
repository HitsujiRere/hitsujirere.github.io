import { useState } from 'react';
import { WorkBoxImage, WorkBoxText } from '../organisms/WorkBox';
import { Section } from '../templates/Section';

export const Works = () => {
  const [isDetailsOpened, setDetailsOpened] = useState(false);

  return (
    <Section id='works'>
      <div className='space-y-5'>
        <h2 className='text-2xl font-light text-yellow-400'>WORKS</h2>
        <div className='grid md:grid-cols-2 gap-5 md:gap-20'>
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
              <WorkBoxImage
                image='/img/yudetamago2.png'
                size='object-cover'
                position='object-top'
              />
            </>
          ) : (
            <button
              className='h-60 p-4 rounded-xl border-2 border-gray-300 flex items-center justify-center'
              onClick={() => setDetailsOpened(!isDetailsOpened)}
            >
              <p className='text-3xl text-gray-300 select-none'>MORE</p>
            </button>
          )}
        </div>
      </div>
    </Section>
  );
};
