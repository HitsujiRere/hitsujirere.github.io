import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{"'"}s Portfolio - My Portfolio</title>
        <meta name='description' content="Rere's Portfolio - My Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <WorkPage
        name='時間計算ツール'
        explains={['時間を計算するツール']}
        languages='Typescript'
        frameworks='React, Peggy'
        feelings={[
          '自分のためのサイト',
          'localstorageによる履歴保存機能があります',
          '（デザインをきれいにしたいな）',
        ]}
        linkWork='https://hitsujirere.github.io/time-calc'
        linkGitHub='https://github.com/HitsujiRere/time-calc'
        images={['/img/time-calc.png']}
      />
    </div>
  );
};

export default Home;
