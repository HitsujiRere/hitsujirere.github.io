import Link from 'next/link';
import { MdEngineering } from 'react-icons/md';
import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiGithub,
  SiJavascript,
  SiProcessingfoundation,
  SiPython,
  SiReact,
  SiRust,
  SiTwitter,
  SiTypescript,
  SiUnity,
  SiVuedotjs,
} from 'react-icons/si';
import { IconCard, IconCardList } from '@/components/iconCard';
import { LineCard, LineCardList } from '@/components/lineCard';
import { SkillCard, SkillCardList } from '@/components/skillCard';
import { Timeline, TimelineItem } from '@/components/timeLine';

export default function Home() {
  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <div>
          <h1 className='space-x-2'>
            <span className='text-3xl font-bold'>ひつじれれ</span>
            <span className='text-lg font-normal'>@HitsujiRere</span>
          </h1>
        </div>
        <p>高専 -編入-{'>'} 大学3回生</p>
        <div className='flex gap-2'>
          <Link href='https://twitter.com/HitsujiRere' target='_blank' className='p-1'>
            <SiTwitter size='1.75rem' color='#1DA1F2' />
          </Link>
          <Link href='https://github.com/HitsujiRere' target='_blank' className='p-1'>
            <SiGithub size='1.75rem' color='#181717' />
          </Link>
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>Award</h2>
        <LineCardList>
          <LineCard>第2回全国高等専門学校 ディープラーニングコンテスト2021 : 7位</LineCard>
          <LineCard>Hokuriku Innovation Trial-2020 : ICTまちづくり賞</LineCard>
          <LineCard>パソコン甲子園2020 プログラミング部門 : 本選出場</LineCard>
          <LineCard>
            全国高専プログラミングコンテスト 第31回苫小牧大会(2020)
            <ul className='flex flex-wrap gap-x-4 gap-y-2'>
              <li>自由部門 : 特別賞</li>
              <li>パテント審査部門 : 奨励賞</li>
            </ul>
          </LineCard>
        </LineCardList>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>Skill</h2>
        <div className='space-y-2'>
          <h3 className='text-xl'>Language</h3>
          <SkillCardList>
            <SkillCard name='C' icon={SiC} iconColor='#A8B9CC' stars={4} />
            <SkillCard name='C++' icon={SiCplusplus} iconColor='#00599C' stars={4} />
            <SkillCard name='C#' icon={SiCsharp} iconColor='#239120' stars={3} />
            <SkillCard name='TypeScript' icon={SiTypescript} iconColor='#3178C6' stars={4} />
            <SkillCard name='JavaScript' icon={SiJavascript} iconColor='#F7DF1E' stars={5} />
            <SkillCard name='CSS' icon={SiCss3} iconColor='#1572B6' stars={4} />
            <SkillCard name='Python' icon={SiPython} iconColor='#3776AB' stars={3} />
            <SkillCard name='Rust' icon={SiRust} iconColor='#000000' stars={2} />
            <SkillCard
              name='Processing'
              icon={SiProcessingfoundation}
              iconColor='#006699'
              stars={5}
            />
          </SkillCardList>
        </div>
        <div className='space-y-2'>
          <h3 className='text-xl'>Library / Framework</h3>
          <SkillCardList>
            <SkillCard name='React' icon={SiReact} iconColor='#61DAFB' stars={3} />
            <SkillCard name='Vue.js' icon={SiVuedotjs} iconColor='#4FC08D' stars={4} />
            <SkillCard name='Unity' icon={SiUnity} iconColor='#333333' stars={2} />
          </SkillCardList>
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>Hobby</h2>
        <IconCardList>
          <IconCard name='AtCoder' iconSrc='/atcoder-logo.svg' href='https://atcoder.jp/users/Deji'>
            Highest Rate: 1455
          </IconCard>
          <IconCard name='🚧追記予定🚧' icon={MdEngineering} iconColor='#292524' />
        </IconCardList>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>Part-time Job</h2>
        <LineCardList>
          <LineCard>株式会社エニーアップ : 2022-06~</LineCard>
        </LineCardList>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>History</h2>
        <div className='ml-2'>
          <Timeline>
            <TimelineItem>
              <p className='text-gray-600'>2018-04</p>
              <p className='text-lg'>■■工業高等専門学校 情報系学科 入学</p>
            </TimelineItem>
            <TimelineItem>
              <p className='text-lg'>🚧追記予定🚧</p>
            </TimelineItem>
            <TimelineItem>
              <p className='text-sm text-gray-600'>2023-03</p>
              <p className='text-lg'>■■工業高等専門学校 卒業</p>
            </TimelineItem>
            <TimelineItem>
              <p className='text-sm text-gray-600'>2023-04</p>
              <p className='text-lg'>■■大学 情報系学科に3年次編入</p>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
