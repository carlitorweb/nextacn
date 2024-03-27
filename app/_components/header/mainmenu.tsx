'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainMenu() {
  const isActiveLink = (currentPath: string) => {
    const pathname = usePathname();
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
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Deportes
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Economía
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Internacionales
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Cultura
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Salud
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Ciencia-M.Ambiente
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Especiales
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Efemerides
          </Link>
          <Link
            as='#'
            href='#'
            className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-950'>
            Pódcasts
          </Link>
        </div>
      </div>
    </nav>
  );
}
