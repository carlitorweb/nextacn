import ThemeSwitch from '@/app/_components/header/theme-toggle';

export default function TopNabvar() {
  return (
    <nav className='bg-zinc-900'>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
        <div className='relative flex h-11 items-center justify-between'>
          <div className='flex items-center px-2 lg:px-0'>
            <div className='hidden lg:ml-6 lg:block'>
              <div className='flex items-center space-x-4'>
                <a
                  href='#'
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-800 hover:text-white focus:bg-zinc-950 focus:text-white'>
                  Nosotros
                </a>
                <a
                  href='#'
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-800 hover:text-white focus:bg-zinc-950 focus:text-white'>
                  Servicios
                </a>
                <a
                  href='#'
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-800 hover:text-white focus:bg-zinc-950 focus:text-white'>
                  Enlaces ACN
                </a>
                <a
                  href='#'
                  className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-800 hover:text-white focus:bg-zinc-950 focus:text-white'>
                  Tiempo en CUba
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end'>
            <div className='w-full max-w-lg lg:max-w-xs'>
              <label htmlFor='search' className='sr-only'>
                Buscar
              </label>
              <div className='relative'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <input
                  id='search'
                  name='search'
                  className='block w-full rounded-md border-0 bg-zinc-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-gray-300 focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='Buscar'
                  type='search'
                />
              </div>
            </div>
          </div>

          <div className='ml-4 block'>
            <div className='flex items-center'>
              <a
                href='http://www.facebook.com/AgenciaCubanaDeNoticias'
                target='_blanck'
                className='hidden md:flex text-gray-300 hover:text-white'>
                <span className='sr-only'>Facebook</span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <a
                href='https://twitter.com/ACN_Cuba'
                target='_blanck'
                className='hidden md:flex text-gray-300 hover:text-white ml-4'>
                <span className='sr-only'>Twitter - X</span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
                </svg>
              </a>

              <a
                href='http://www.youtube.com/user/agenciacubana'
                target='_blanck'
                className='hidden md:flex text-gray-300 hover:text-white ml-4'>
                <span className='sr-only'>YouTube</span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
