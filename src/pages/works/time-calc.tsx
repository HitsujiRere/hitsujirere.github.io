import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <WorkPage
      name='時間計算ツール'
      explain='時間を式として計算するツールです。'
      language='Typescript'
      framework='React, Peggy'
      feeling={`
        自分用のサイトです。
        localstorageによる履歴保存機能があります。
        （デザインをきれいにしたいな・・・）
      `.trim()}
      linkWork='https://hitsujirere.github.io/time-calc'
      linkGitHub='https://github.com/HitsujiRere/time-calc'
      images={['/img/time-calc.png']}
    />
  );
};

export default Home;
