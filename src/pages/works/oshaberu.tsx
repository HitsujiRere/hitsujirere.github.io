import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
