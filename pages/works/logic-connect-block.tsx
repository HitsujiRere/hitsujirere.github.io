import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../../components/pages/Header';
import { WorkPage } from '../../components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{"'"}s Portfolio - Logic Connect Block</title>
        <meta name='description' content="Rere's Portfolio - Logic Connect Block" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <WorkPage
          name='Logic Connect Block'
          explains={[
            '学校のシステム設計演習にてチーム制作した、' +
              '論理回路を直観的に組み立てられる「ブロック」と、' +
              'AtTinyブロック用のプログラムを自動生成できる「Webシミュレータ」',
          ]}
          charge='回路作製補助, 資料作製, Webシミュレータ製作'
          languages='C#, JavaScript'
          frameworks='Unity, WebAsembly'
          feelings={[
            '3人でのチーム制作だったが、それぞれの長所を活かすことができ、当初の計画よりも非常に良いものを生み出すことができたので、とても楽しかった。',
          ]}
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
      </main>
    </div>
  );
};

export default Home;
