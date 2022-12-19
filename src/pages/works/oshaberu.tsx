import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <WorkPage
      name='おしゃべる'
      explain={`
        自由な声とおしゃべりできるスマートスピーカーの追加コンテンツです。
        DCON2021にて発表し、7位を獲得しました。
      `.trim()}
      charge='音声合成, APIサーバ'
      language='JavaScript, Python'
      framework='Node.js, Tacotron2'
      feeling='初めて深層学習を用いたましたが、うまくチームメンバーなどの音声を合成することができました。'
      linkGitHub='https://github.com/HitsujiRere/hitsujirere.github.io'
      images={[
        '/img/oshaberu/cover.png',
        '/img/oshaberu/system.png',
        '/img/oshaberu/voice-1.png',
        '/img/oshaberu/voice-2.png',
      ]}
    />
  );
};

export default Home;
