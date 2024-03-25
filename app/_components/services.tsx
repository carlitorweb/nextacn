import Image from 'next/image';
import { Lato, Roboto_Slab } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '900'],
  style: ['italic', 'normal'],
});

const roboto = Roboto_Slab({
  variable: '--roboto-slab',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

export default function Services() {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 mt-8 sm:pb-20'>
      <Image
        src='/assets/banners/servicesbackground.avif'
        alt='Planing'
        className='absolute inset-0 -z-10 h-full w-full object-cover'
        width={2830}
        height={1857}
      />
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}></div>
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2
                className={`${roboto.className} text-base font-semibold leading-7 text-red-400`}>
                Todo lo que necesitas
              </h2>
              <p
                className={`${lato.className} mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl`}>
                Nuestros servicios
              </p>
              <p className={`${lato.className} mt-6 text-lg leading-8 text-gray-300`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis.
              </p>
            </div>
            <dl
              className={`${lato.className} mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16`}>
              <div className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute left-1 top-1 h-5 w-5 text-red-500'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25'
                    />
                  </svg>
                  Cast
                </dt>
                <dd className='inline'> Verdad con Inmediatez</dd>
              </div>
              <div className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute left-1 top-1 h-5 w-5 text-red-500'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'
                    />
                  </svg>
                  Fotografía
                </dt>
                <dd className='inline'> Más de 40 años de Imágenes</dd>
              </div>
              <div className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute left-1 top-1 h-5 w-5 text-red-500'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
                    />
                  </svg>
                  Centro de Documentación
                </dt>
                <dd className='inline'> Profesionalidad en la búsqueda de información</dd>
              </div>
              <div className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute left-1 top-1 h-5 w-5 text-red-500'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                    />
                  </svg>
                  Servicios Especiales
                </dt>
                <dd className='inline'>
                  {' '}
                  Reportajes, artículos, comentarios, entrevistas y crónicas exclusivas
                </dd>
              </div>
              <div className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute left-1 top-1 h-5 w-5 text-red-500'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z'
                    />
                  </svg>
                  Radio
                </dt>
                <dd className='inline'> Sonido para Vivir Cuba</dd>
              </div>
              <div className='relative pl-9'>
                <dt className='inline font-semibold text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute left-1 top-1 h-5 w-5 text-red-500'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z'
                    />
                  </svg>
                  Ofertas
                </dt>
                <dd className='inline'> El camino seguro de los clasificados en Cuba</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'>
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}></div>
      </div>
    </div>
  );
}
