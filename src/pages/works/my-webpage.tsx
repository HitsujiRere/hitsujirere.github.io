import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <WorkPage
      name='My Portfolio by Next.js'
      explain='自分についてや、今まで作った作品をまとめたウェブページです。'
      language='Typescript'
      framework='Next.js, Tailwind CSS, p5.js'
      feeling={`
        ver2.0
        以前作成したウェブページのサイトデザインを一新し、全体的に明るくなりました。

        ver1.0
        自分のウェブページを作るのは3回目。
        Next.js と Tailwind CSS を使えるようになったので、これらを駆使しておしゃれに作ることができました。
      `.trim()}
      linkWork='https://hitsujirere.github.io'
      linkGitHub='https://github.com/HitsujiRere/hitsujirere.github.io'
      images={['/img/my-webpage/v2.png', '/img/my-webpage/v1.png']}
    />
  );
};

export default Home;
