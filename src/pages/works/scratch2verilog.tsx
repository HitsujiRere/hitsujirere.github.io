import type { NextPage } from 'next';
import Head from 'next/head';
import { WorkPage } from '@/components/templates/WorkPage';

const Home: NextPage = () => {
  return (
    <WorkPage
      name='Scratch to Verilog HDL'
      explain='ビジュアルプログラミングが行えるScratch上でFPGAのハードウェア記述言語の1つであるVerilog HDKの自動合成を行う拡張機能'
      language='JavaScript'
      feeling='工業高等専門学校の卒業研究として行いました．'
      linkWork='https://xcratch.github.io/editor/#https://HitsujiRere.github.io/scratch2verilog/projects/example.sb3'
      linkGitHub='https://github.com/HitsujiRere/scratch2verilog'
      images={[
        ...Array.from({ length: 15 }, (_, i) => `/img/scratch2verilog/presentation (${i + 1}).png`),
      ]}
    />
  );
};

export default Home;
