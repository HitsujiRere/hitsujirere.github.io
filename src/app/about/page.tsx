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
import { AwardCard } from '@/components/awardCard';
import { SkillCard } from '@/components/skillCard';
import { Timeline, TimelineItem } from '@/components/timeLine';

export default function Home() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <div>
          <h1 className='space-x-2'>
            <span className='text-3xl font-bold'>ひつじれれ</span>
            <span className='text-lg font-normal'>@HitsujiRere</span>
          </h1>
        </div>
        <p>元気に過ごしています</p>
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
        <ul className='flex flex-col items-start gap-4'>
          <AwardCard>第2回全国高等専門学校 ディープラーニングコンテスト2021 : 7位</AwardCard>
          <AwardCard>Hokuriku Innovation Trial-2020 : ICTまちづくり賞</AwardCard>
          <AwardCard>パソコン甲子園2020 プログラミング部門 : 本選出場</AwardCard>
          <AwardCard>
            全国高専プログラミングコンテスト 第31回苫小牧大会(2020)
            <ul className='flex flex-wrap gap-x-4 gap-y-2'>
              <li>自由部門 : 特別賞</li>
              <li>パテント審査部門 : 奨励賞</li>
            </ul>
          </AwardCard>
        </ul>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>Skill</h2>
        <div className='space-y-2'>
          <h3 className='text-xl'>Language</h3>
          <ul className='flex flex-wrap gap-4'>
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
          </ul>
        </div>
        <div className='space-y-2'>
          <h3 className='text-xl'>Library / Framework</h3>
          <ul className='flex flex-wrap gap-4'>
            <SkillCard name='React' icon={SiReact} iconColor='#61DAFB' stars={3} />
            <SkillCard name='Vue.js' icon={SiVuedotjs} iconColor='#4FC08D' stars={4} />
            <SkillCard name='Unity' icon={SiUnity} iconColor='#333333' stars={2} />
          </ul>
        </div>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>Hobby</h2>
        <ul className='flex flex-wrap gap-4'>
          <SkillCard
            name='AtCoder'
            iconSrc='/atcoder-logo.svg'
            href='https://atcoder.jp/users/Deji'
            target='_blank'
          >
            Highest Rate: 1455
          </SkillCard>
          <SkillCard name='🚧追記予定🚧' icon={MdEngineering} iconColor='#292524' />
        </ul>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-medium'>History</h2>
        <div className='ml-2'>
          <Timeline>
            <TimelineItem>
              <p className='text-sm text-gray-600'>2023-04</p>
              <p className='text-lg'>某大学 情報系学科に3年次編入</p>
            </TimelineItem>
            <TimelineItem>
              <p className='text-sm text-gray-600'>2023-03</p>
              <p className='text-lg'>某工業高等専門学校 卒業</p>
            </TimelineItem>
            <TimelineItem>
              <p className='text-lg'>🚧追記予定🚧</p>
            </TimelineItem>
            <TimelineItem>
              <p className='text-gray-600'>2018-04</p>
              <p className='text-lg'>某工業高等専門学校 入学</p>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
