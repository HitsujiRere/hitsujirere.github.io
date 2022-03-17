import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import YouTube from 'react-youtube';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hitsuji Rere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-screen-xl mx-auto'>
        <Header />

        <main>
          <div>
            <h2 className='text-3xl font-bold text-center p-6 typewriter'>
              Fall Texts
            </h2>

            <div className="text-xl w-max mx-auto">
              <div className='space-y-6 whitespace-pre-wrap'>
                <p>文字を落として、リアルタイムでみんなと共有</p>
                <p>サーバ : Node.js</p>
                <p>表示 : p5.js</p>
                <p>通信 : socket.io</p>
                <p>
                  <Link href='https://github.com/HitsujiRere/HerokuTestSever'>
                    <a className='border-b-2 hover:border-2 border-gray-100 border-b-black hover:border-black p-1 hover:p-2.5 duration-500'>GitHub</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
