import { Metadata } from 'next';
import { Sidebar } from './Sidebar';
import './globals.css';
import { Zen_Maru_Gothic } from 'next/font/google';

const zenMaruGothic = Zen_Maru_Gothic({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ひつじれれ🐏',
  description: 'ひつじれれのWebpage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={zenMaruGothic.className}>
        <div className='flex h-screen bg-stone-100'>
          <Sidebar />
          <main className='flex-1 p-4'>{children}</main>
        </div>
      </body>
    </html>
  );
}
