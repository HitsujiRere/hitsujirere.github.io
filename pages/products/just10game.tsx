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
              Just 10 Game
            </h1>

            <div className="text-xl w-max mx-auto">
              <div className='space-y-6 whitespace-pre-wrap'>
                <p>数字の10を作る落ち物ゲーム</p>
                <p>C++ ( OpenSiv3D ) で開発．</p>
                <p className='space-x-3'>
                  <Link href='https://github.com/HitsujiRere/Just10Game'>
                    <a className='border-b-2 hover:border-2 border-gray-100 border-b-black hover:border-black p-1 hover:p-2.5 duration-500'>GitHub</a>
                  </Link>
                  <Link href='https://scrapbox.io/hitsujirere-projects/Just10Game'>
                    <a className='border-b-2 hover:border-2 border-gray-100 border-b-black hover:border-black p-1 hover:p-2.5 duration-500'>Scrapbox</a>
                  </Link>
                  <Link href='https://twitter.com/HitsujiRere/status/1243791294679240711'>
                    <a className='border-b-2 hover:border-2 border-gray-100 border-b-black hover:border-black p-1 hover:p-2.5 duration-500'>Twitter</a>
                  </Link>
                </p>
                <YouTube videoId='mSAGdvujaFc' />
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
