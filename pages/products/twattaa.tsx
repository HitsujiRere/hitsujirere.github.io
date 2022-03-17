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
            <h1 className='text-3xl font-bold text-center p-6 typewriter'>
              Twattaa
            </h1>

            <div className="text-xl w-max mx-auto">
              <div className='space-y-6 whitespace-pre-wrap'>
                <p>授業の演習にて作成・発表した匿名掲示板</p>
                <p>サーバ : Node.js</p>
                <p>フロント : Vue.js</p>
                <p>通信 : socket.io</p>
                <p>データベース : Postgres</p>
                <p>
                  <Link href='https://github.com/HitsujiRere/Twattaa'>
                    <a className='border-b-2 hover:border-2 border-gray-100 border-b-black hover:border-black p-1 hover:p-2.5 duration-500'>GitHub</a>
                  </Link>
                </p>
                <div>
                  <Image src='/images/twattaa/1.png' width={640} height={314} alt='twattaa' />
                </div>
                <div>
                  <Image src='/images/twattaa/2.png' width={640} height={314} alt='twattaa' />
                </div>
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
