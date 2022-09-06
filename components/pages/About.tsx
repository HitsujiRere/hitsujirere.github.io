import Link from 'next/link';
import { useState } from 'react';
import { H2 } from '@/components/atoms/H2';
import { H3 } from '@/components/atoms/H3';
import { IconLink } from '@/components/atoms/IconLink';
import { Section } from '@/components/templates/Section';

export const About = () => {
  const [isDetailsOpened, setDetailsOpened] = useState(false);

  return (
    <Section id='about'>
      <div className='space-y-5'>
        <H2 title='ABOUT' />
        <div className='md:flex md:justify-between space-x-1'>
          <div className='md:w-2/3 space-y-5'>
            <p className='text-5xl tracking-wide font-bold text-white'>Hitsuji Rere</p>
            <p className='text-sm text-gray-400'>ある工業高等専門学校の5年</p>
            <img
              src='/img/myself.png'
              className='w-full md:hidden'
              alt='My picture'
              loading='lazy'
            />
            <div className='text-xl text-gray-200'>
              <p>私は「好奇心」がとても強く、何にでも興味があります。</p>
              <p>
                Processing や Siv3D 、 Unity でゲームを作ったり、 Node.js でバックエンドの勉強を、
                Next.js でフロントエンドの勉強をしています。
              </p>
              <p>
                またオリジナルのプログラミング言語を作ったり、競技プログラミングを楽しんでいます。
              </p>
              <p>
                高専プロコン2020 や DCON2021
                にチームで出場させていただいた経験を活かして、チーム制作活動では個人の長所を活かせるチームづくりに取り組んでいます。
              </p>
            </div>
            <div className='flex space-x-5'>
              <IconLink text='@HitsujiRere' to='https://twitter.com/HitsujiRere' icon='twitter' />
              <IconLink text='@HitsujiRere' to='https://github.com/HitsujiRere' icon='github' />
            </div>
            <div
              className={
                'space-y-5 overflow-hidden transition-all duration-1000 ' +
                (isDetailsOpened ? 'max-h-screen opacity-100 ' : 'max-h-0 opacity-0 ')
              }
            >
              <div className='space-y-5'>
                <H3 title='AWARDS' />
                <div className='text-xl text-gray-200 space-y-2'>
                  <p>第2回全国高等専門学校 ディープラーニングコンテスト2021 : 7位</p>
                  <p>Hokuriku Innovation Trial-2020 : ICTまちづくり賞</p>
                  <p>パソコン甲子園2020 プログラミング部門 : 本選出場</p>
                  <p>全国高専プログラミングコンテスト 第31回苫小牧大会(2020)</p>
                  <p className='pl-10'>自由部門 : 特別賞</p>
                  <p className='pl-10'>パテント審査部門 : 奨励賞</p>
                </div>
              </div>
              <div className='space-y-5'>
                <H3 title='CERTIFICATION' />
                <div className='text-xl text-gray-200 space-y-2'>
                  <p>ITパスポート</p>
                </div>
              </div>
              <div className='space-y-5'>
                <H3 title='PARTTIME-JOB' />
                <div className='text-xl text-gray-200 space-y-2'>
                  <p>株式会社エニーアップ：2022年6月~</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src='/img/myself.png'
            className='w-1/3 h-1/3 hidden md:flex'
            alt='My picture'
            loading='lazy'
          />
        </div>
        <div className='flex justify-center'>
          <button
            className='px-4 py-2 rounded-xl border-2 border-gray-200'
            onClick={() => setDetailsOpened(!isDetailsOpened)}
          >
            <div className='text-2xl text-gray-200 select-none'>
              {isDetailsOpened ? 'CLOSE' : 'MORE'}
            </div>
          </button>
        </div>
      </div>
    </Section>
  );
};
