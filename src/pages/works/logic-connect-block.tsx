import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <WorkPage
      name='Logic Connect Block'
      explain='学校のシステム設計演習にてチーム制作した、論理回路を直観的に組み立てられる「ブロック」と、AtTinyブロック用のプログラムを自動生成できる「Webシミュレータ」です。'
      charge='回路作製補助, 資料作製, Webシミュレータ製作'
      language='C#, JavaScript'
      framework='Unity, WebAsembly'
      feeling='3人でのチーム制作でしたが、それぞれの長所を活かすことができ、当初の計画よりも非常に良いものを生み出すことができ、とても楽しかったです。'
      linkWork='https://hitsujirere.github.io/LogicConnectBlockSim/'
      linkGitHub='https://github.com/HitsujiRere/LogicConnectBlockSim'
      images={[
        '/img/LogicConnectBlock/cover.jpg',
        '/img/LogicConnectBlock/web-sim.png',
        ...Array.from(
          { length: 19 },
          (_, i) => `/img/LogicConnectBlock/presentation (${i + 1}).png`,
        ),
      ]}
    />
  );
};

export default Home;
