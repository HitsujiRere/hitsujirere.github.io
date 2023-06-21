import { Metadata } from 'next';
import { Zen_Maru_Gothic } from 'next/font/google';
import { Sidebar } from './Sidebar';
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
      <body className={zenMaruGothic.className}>
        <div className='flex h-screen bg-stone-100'>
          <Sidebar />
          <main className='h-screen flex-1 overflow-auto p-4 pl-[calc(tan(5deg)*100vh+0.5rem)] md:pl-8'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
