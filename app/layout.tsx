import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/app/_components/footer';
import MainMenu from '@/app/_components/header/mainmenu';
import Logo from '@/app/_components/header/logo';
import Providers from '@/app/_components/header/providers';
import TopNabvar from '@/app/_components/header/topnabvar';

export const metadata: Metadata = {
  title: 'ACN',
  description:
    'La Agencia Cubana de Noticias, ACN  actualiza sobre acontecer  de Cuba y el mundo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className='relative bg-zinc-100 dark:bg-zinc-200'>
        <Providers>
          <header>
            <TopNabvar />
            <Logo />
            <MainMenu />
          </header>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
