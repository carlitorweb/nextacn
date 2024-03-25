import Image from 'next/image';
import { Lato, Roboto_Slab, Montserrat } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '900'],
  style: ['italic', 'normal'],
});

export default function Footer() {
  return (
    <footer className='bg-gray-900' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <Image
              src='/assets/banners/logoacn.png'
              alt='ACN'
              className='h-20 w-auto'
              width={400}
              height={81}
            />

            <p className={`${lato.className} text-sm leading-6 text-gray-300`}>
              La Agencia Cubana de Noticias, ACN actualiza sobre acontecer de Cuba y el mundo.
            </p>
            <div className='flex space-x-6'>
              <a
                href='https://www.facebook.com/AgenciaCubanaDeNoticias'
                className='text-gray-500 hover:text-gray-400'>
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
                className='text-gray-500 hover:text-gray-400'>
                <span className='sr-only'>X</span>
                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
                </svg>
              </a>

              <a
                href='https://www.youtube.com/user/agenciacubana'
                className='text-gray-500 hover:text-gray-400'>
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
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div className='pt-4'>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='https://www.pcc.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      PCC
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.minrex.gob.cu/es'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Minrex
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.prensa-latina.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Prensa Latina
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-10 md:mt-0 pt-4'>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='http://www.cubadebate.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Cubadebate
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.cubasi.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Cubasi
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.ecured.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Ecured
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8 pt-4'>
              <div>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='http://www.granma.cubaweb.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Granma
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.bohemia.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Bohemia
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.juventudrebelde.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Juventud Rebelde
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <ul role='list' className='mt-6 space-y-4'>
                  <li>
                    <a
                      href='http://www.trabajadores.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Trabajadores
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.tvcubana.icrt.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      TV Cubana
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://www.cubasocialista.cu/'
                      target='_blank'
                      className='text-sm leading-6 text-gray-300 hover:text-white'>
                      Cuba Socialista
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-400'>
            &copy; 2024 Agencia Cubana de Noticias. Todos los derechos reservados.
            <span className='font-semibold'>Directora General:</span> Edda Diz Garcés.
            <span className='font-semibold'>Teléfono:</span> 78325542.
            <span className='font-semibold'>E-mail:</span>web@acn.cu
          </p>
        </div>
      </div>
    </footer>
  );
}
