import Link from "next/link"
import { ReactNode } from "react"

const WorkBoxImage = (props: { src: string, size?: string, position?: string} ) => {
  return (
    <Link href='/'>
      <a
        className={`h-60 rounded-xl bg-gray-100 ${props.size ?? "bg-contain"} bg-no-repeat ${props.position ?? "bg-center"}`}
        style={{backgroundImage: `url(${props.src})`}}
      ></a>
    </Link>
  );

};

const WorkBoxText = (props: { children?: ReactNode } ) => {
  return (
    <Link href='/'>
      <a className='h-60 p-4 rounded-xl bg-gray-100 flex items-center'>
        <div className="w-full text-center space-y-5">
          {props.children}
        </div>
      </a>
    </Link>
  );
};

const Works = () => {
  return (
    <div id="works" className='px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500'>
      <div className='mx-auto max-w-screen-lg space-y-5'>
        <h2 className="text-2xl font-light text-yellow-400">WORKS</h2>
        <div className="grid md:grid-cols-2 gap-5 md:gap-20">
          <WorkBoxImage src="/img/my-webpage.png" size="bg-cover" position="bg-top" />
          <WorkBoxImage src="/img/LogicConnectBlock.jpg" size="bg-cover" position="bg-center" />
          <WorkBoxImage src="/img/oshaberu_logo.png" size="bg-contain" position="bg-center" />
          <WorkBoxImage src="/img/twattaa.png" size="bg-cover" position="bg-top" />
          <WorkBoxImage src="/img/LearnProcessing.png" size="bg-cover" position="bg-top" />
          <WorkBoxText>
            <p className="text-7xl text-black">Fall Texts</p>
            <p className="text-xl  text-black">みんなで言葉を降らせよう</p>
          </WorkBoxText>
          <WorkBoxImage src="/img/shimale_logo.png" size="bg-contain" position="bg-center" />
          <WorkBoxImage src="/img/siritoriVS.jpg" size="bg-cover" position="bg-top" />
          <WorkBoxImage src="/img/HexCalcurator.png" size="bg-cover" position="bg-top" />
          <WorkBoxImage src="/img/just10game.png" size="bg-cover" position="bg-center" />
          <WorkBoxImage src="/img/yudetamago2.png" size="bg-cover" position="bg-top" />
        </div>
      </div>
    </div>
  );
};

export default Works;
