import Link from 'next/link';
import { ReactNode, useState } from 'react';

const WorkBoxImage = (props: { href: string, image: string, size: string, position: string }) => {
  return (
    <Link href={props.href}>
      <a className="h-60">
        <img
          src={props.image}
          className={`h-full w-full rounded-xl ${props.size} ${props.position} ${props.size === 'object-contain' && 'bg-gray-100'}`}
          alt="cover image"
          loading="lazy"
        />
      </a>
    </Link>
  );
};

const WorkBoxText = (props: { href: string, children?: ReactNode }) => {
  return (
    <Link href={props.href}>
      <a className="h-60 p-4 rounded-xl bg-gray-100 flex items-center">
        <div className="w-full text-center space-y-5 select-none">
          {props.children}
        </div>
      </a>
    </Link>
  );
};

const Works = () => {
  const [isDetailsOpened, setDetailsOpened] = useState(false);

  return (
    <div id="works" className="px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500">
      <div className="mx-auto max-w-screen-lg space-y-5">
        <h2 className="text-2xl font-light text-yellow-400">WORKS</h2>
        <div className="grid md:grid-cols-2 gap-5 md:gap-20">
          <WorkBoxImage href="/works/my-webpage" image="/img/my-webpage.png" size="object-cover" position="object-top" />
          <WorkBoxImage href="/works/logic-connect-block" image="/img/LogicConnectBlock/cover.jpg" size="object-cover" position="object-center" />
          <WorkBoxImage href="/works/oshaberu" image="/img/oshaberu/logo.png" size="object-contain" position="object-center" />
          <WorkBoxImage href="/works/twattaa" image="/img/twattaa/1.png" size="object-cover" position="object-top" />
          <WorkBoxImage href="/works/learn-processing" image="/img/LearnProcessing.png" size="object-cover" position="object-top object-left" />
          {isDetailsOpened ? (
            <>
              <WorkBoxText href="/">
                <p className="text-7xl text-black">Fall Texts</p>
                <p className="text-xl  text-black">みんなで言葉を降らせよう</p>
              </WorkBoxText>
              <WorkBoxImage href="/" image="/img/shimale_logo.png" size="object-contain" position="object-center" />
              <WorkBoxImage href="/" image="/img/siritoriVS.jpg" size="object-cover" position="object-top" />
              <WorkBoxImage href="/" image="/img/HexCalcurator.png" size="object-cover" position="object-top" />
              <WorkBoxImage href="/" image="/img/just10game.png" size="object-cover" position="object-center" />
              <WorkBoxImage href="/" image="/img/yudetamago2.png" size="object-cover" position="object-top" />
            </>
          ) : (
            <div
              className="h-60 p-4 rounded-xl border-2 border-gray-300 flex items-center justify-center cursor-pointer"
              onClick={() => setDetailsOpened(true)}
            >
              <p className="text-3xl text-gray-300 select-none">MORE</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
