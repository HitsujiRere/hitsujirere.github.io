import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/pages/Header';
import WorkPage from '../../components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rere{"'"}s Portfolio - おしゃべる</title>
        <meta name='description' content="Rere's Portfolio - おしゃべる" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <WorkPage
          name='おしゃべる'
          explains={[
            '自由な声とおしゃべりできるスマートスピーカーの追加コンテンツ',
            'DCON2021にて発表し、7位を獲得した。',
          ]}
          charge='音声合成, APIサーバ'
          languages='JavaScript, Python'
          frameworks='Node.js, Tacotron2'
          feelings={[
            '初めて深層学習を用いたが、うまくチームメンバーなどの音声を合成することができた。',
          ]}
          linkGitHub='https://github.com/HitsujiRere/hitsujirere.github.io'
          images={[
            '/img/oshaberu/cover.png',
            '/img/oshaberu/system.png',
            '/img/oshaberu/voice-1.png',
            '/img/oshaberu/voice-2.png',
          ]}
        />
      </main>
    </div>
  );
};

export default Home;
