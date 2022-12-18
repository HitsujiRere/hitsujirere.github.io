import classNames from 'classnames';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { H2 } from '@/components/atoms/H2';
import { H3 } from '@/components/atoms/H3';
import { IconLink } from '@/components/atoms/IconLink';
import { Section } from '@/components/templates/Section';

export const About = () => {
  const [isDetailsOpened, setDetailsOpened] = useState(false);

  return (
    <Section id='about'>
      <H2 title='ABOUT' />
      <div className='my-4'>
        <p className='my-4 text-5xl font-bold tracking-tight'>Hitsuji Rere</p>
        <p className='text-gray-600'>情報系工業高等専門学校 5年</p>
      </div>
      <div className='my-4 space-y-1'>
        <p>私は「好奇心」がとても強く、何にでも興味があります。</p>
        <p>
          ProcessingやSiv3D、Unityでゲームを作ったり、Node.jsでバックエンドを、Next.jsでフロントエンドをしています。
        </p>
        <p>またオリジナルのプログラミング言語を作ったり、競技プログラミングを楽しんでいます。</p>
      </div>
      <div className='my-4 flex flex-col gap-2 sm:flex-row sm:gap-4'>
        <IconLink text='@HitsujiRere' to='https://twitter.com/HitsujiRere' icon='twitter' />
        <IconLink text='HitsujiRere' to='https://github.com/HitsujiRere' icon='github' />
      </div>

      <div
        className={classNames('space-y-8 overflow-hidden transition-all duration-1000', {
          'max-h-screen opacity-100': isDetailsOpened,
          'max-h-0 opacity-0': !isDetailsOpened,
        })}
      >
        <section>
          <H3 title='AWARDS' />
          <ul className='space-y-2'>
            <li>第2回全国高等専門学校 ディープラーニングコンテスト2021 : 7位</li>
            <li>Hokuriku Innovation Trial-2020 : ICTまちづくり賞 </li>
            <li>パソコン甲子園2020 プログラミング部門 : 本選出場</li>
            <li>
              全国高専プログラミングコンテスト 第31回苫小牧大会(2020)
              <ul className='ml-8'>
                <li>自由部門 : 特別賞</li>
                <li>パテント審査部門 : 奨励賞</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <H3 title='CERTIFICATION' />
          <ul className='space-y-2'>
            <li>ITパスポート</li>
          </ul>
        </section>
        <section>
          <H3 title='PARTTIME-JOB' />
          <ul className='space-y-2'>
            <li>株式会社エニーアップ：2022年6月~</li>
          </ul>
        </section>
      </div>

      <div className='flex justify-center'>
        <button
          className='px-4 py-2 duration-500 hover:scale-110'
          onClick={() => setDetailsOpened(!isDetailsOpened)}
        >
          <div className='select-none text-2xl'>
            <IconContext.Provider value={{ size: '2rem' }}>
              {isDetailsOpened ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </IconContext.Provider>
          </div>
        </button>
      </div>
    </Section>
  );
};
