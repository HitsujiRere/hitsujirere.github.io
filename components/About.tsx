import Link from 'next/link';
import { useState } from 'react';

const About = () => {
  const [isDetailsOpened, setDetailsOpened] = useState(false);

  return (
    <div id="about" className="px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500">
      <div className="mx-auto max-w-screen-lg space-y-5">
        <h2 className="text-2xl font-light text-yellow-400">ABOUT</h2>
        <div className="md:flex md:justify-between space-x-1">
          <div className="md:w-2/3 space-y-5">
            <p className="text-5xl tracking-wide font-bold text-white">Rere / Dejima Mikihide</p>
            <p className="text-sm text-gray-400">石川工業高等専門学校 電子情報工学科 5年</p>
            <div className="text-xl text-gray-200">
              <p>私は「好奇心」がとても強く、何にでも興味があります。</p>
              <p>Processing や Siv3D 、 Unity でゲームを作ったり、 Node.js でバックエンドの勉強を、 Next.js でフロントエンドの勉強をしています。</p>
              <p>またオリジナルのプログラミング言語を作ったり、競技プログラミングを楽しんでいます。</p>
              <p>高専プロコン2020 や DCON2021 にチームで出場させていただいた経験を活かして、チーム制作活動では個人の長所を活かせるチームづくりに取り組んでいます。</p>
            </div>
            <div className="flex space-x-5">
              <div className="text-green-300 hover:text-green-600 duration-500">
                <Link href="https://twitter.com/HitsujiRere">
                  <a className="flex">
                    <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
                    <p className="text-xl">HitsujiRere</p>
                  </a>
                </Link>
              </div>
              <div className="text-green-300 hover:text-green-600 duration-500">
                <Link href="https://github.com/HitsujiRere">
                  <a className="flex">
                    <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                    <p className="text-xl">HitsujiRere</p>
                  </a>
                </Link>
              </div>
            </div>
            {isDetailsOpened && (
              <>
                <div className="space-y-5">
                  <h3 className="text-2xl font-light text-yellow-400">AWARDS</h3>
                  <div className="text-xl text-gray-200 space-y-2">
                    <p>第2回全国高等専門学校 ディープラーニングコンテスト2021 : 7位</p>
                    <p>Hokuriku Innovation Trial-2020 : ICTまちづくり賞</p>
                    <p>パソコン甲子園2020 プログラミング部門 : 本選出場</p>
                    <p>高専プロコン 第31回苫小牧大会(2020)</p>
                    <p className="pl-10">自由部門 : 特別賞</p>
                    <p className="pl-10">パテント審査部門 : 奨励賞</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            className="w-1/3 hidden md:flex bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: 'url(/img/myself.png)' }}
          ></div>
        </div>
        {!isDetailsOpened && (
          <div className="flex justify-center">
            <div
              className="px-4 py-2 rounded-xl border-2 border-gray-200 cursor-pointer"
              onClick={() => setDetailsOpened(true)}
            >
              <div className="text-2xl text-gray-200 select-none">MORE</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
