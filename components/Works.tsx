import Link from "next/link"
import { ReactNode } from "react"

const WorkBoxImage = (props: { src: string, size?: string, position?: string} ) => {
  return (
    <Link href='/'>
      <a
        className={`h-60 rounded-xl bg-gray-100 bg-${props.size ?? "contain"} bg-no-repeat bg-${props.position ?? "center"}`}
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
    <div className='px-4 py-20 bg-gray-900 hover:bg-gray-800 duration-500'>
      <div className='mx-auto max-w-screen-lg space-y-5'>
        <h2 id="works" className="text-2xl font-light text-yellow-400">WORKS</h2>
        <div className="grid md:grid-cols-2 gap-5 md:gap-20">
          <WorkBoxImage src="/my-webpage.png" size="cover" position="top" />
          <WorkBoxImage src="/DSC_2151.JPG" size="cover" position="center" />
          <WorkBoxImage src="/おしゃべるロゴ.png" size="contain" position="center" />
          <WorkBoxImage src="/twattaa.png" size="cover" position="top" />
          <WorkBoxImage src="/LearnProcessing.png" size="cover" position="top" />
          <WorkBoxText>
            <p className="text-7xl text-black">Fall Texts</p>
            <p className="text-xl  text-black">みんなで言葉を降らせよう</p>
          </WorkBoxText>
          <WorkBoxImage src="/シマエーるロゴ.png" size="contain" position="center" />
          <WorkBoxImage src="/siritoriVS.jpg" size="cover" position="top" />
          <WorkBoxImage src="/HexCalcurator.png" size="cover" position="top" />
          <WorkBoxImage src="/just10game.png" size="cover" position="center" />
          <WorkBoxImage src="/yudetamago2.png" size="cover" position="top" />
        </div>
      </div>
    </div>
  );
};

export default Works;
