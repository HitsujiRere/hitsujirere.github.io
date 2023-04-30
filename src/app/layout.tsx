import { Metadata } from 'next';
import { Zen_Maru_Gothic } from 'next/font/google';
import { Sidebar } from './Sidebar';
import './globals.css';

const zenMaruGothic = Zen_Maru_Gothic({ weight: ['400', '500', '700', '900'], subsets: ['latin'] });

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
          <main className='h-screen flex-1 overflow-auto p-8'>{children}</main>
        </div>
      </body>
    </html>
  );
}
