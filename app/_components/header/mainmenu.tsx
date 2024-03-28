'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainMenu() {
  const pathname = usePathname();
  const isActiveLink = (currentPath: string) => {
    let defaultStyle =
      'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950';
    if (pathname === currentPath) {
      defaultStyle =
        'inline-flex items-center border-b-2 border-red-800 dark:border-red-700 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 dark:hover:text-gray-950';
    }

    return defaultStyle;
  };

  return (
    <nav className='shadow-md dark:shadow-none border border-white/80 dark:border-slate-50/[0.06] bg-white bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 dark:bg-zinc-700'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='hidden lg:flex justify-between h-14'>
          <Link href='/' className={isActiveLink('/')}>
            Inicio
          </Link>
          <Link href='/cuba' className={isActiveLink('/cuba')}>
            Cuba
          </Link>
          <Link href='/deportes' className={isActiveLink('/deportes')}>
            Deportes
          </Link>
          <Link href='/economia' className={isActiveLink('/economia')}>
            Economía
          </Link>
          <Link href='/internacionales' className={isActiveLink('/internacionales')}>
            Internacionales
          </Link>
          <Link href='/cultura' className={isActiveLink('/cultura')}>
            Cultura
          </Link>
          <Link href='/salud' className={isActiveLink('/salud')}>
            Salud
          </Link>
          <Link href='/ciencia' className={isActiveLink('/ciencia')}>
            Ciencia-M.Ambiente
          </Link>
          <Link href='/especiales' className={isActiveLink('/especiales')}>
            Especiales
          </Link>
          <Link href='/efemerides' className={isActiveLink('/efemerides')}>
            Efemerides
          </Link>
          <Link href='/podcasts' className={isActiveLink('/podcasts')}>
            Pódcasts
          </Link>
        </div>
      </div>
    </nav>
  );
}
