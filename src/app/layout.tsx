import { Metadata } from 'next';
import { Zen_Maru_Gothic } from 'next/font/google';
import classNames from 'classnames';
import { Header } from './Header';
import './globals.css';

const zenMaruGothic = Zen_Maru_Gothic({ weight: ['400', '500', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ひつじれれ🐏',
  description: 'ひつじれれのWebpage',
  icons: '/icon.png',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={classNames('bg-stone-100', zenMaruGothic.className)}>
        <Header />
        <main className='mx-auto max-w-screen-lg p-4'>{children}</main>
      </body>
    </html>
  );
}
