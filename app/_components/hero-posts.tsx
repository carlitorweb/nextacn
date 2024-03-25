import Link from 'next/link';
import { Lato, Roboto_Slab, Montserrat } from 'next/font/google';
import CoverImage from '@/app/_components/cover-image';

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

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  style: ['italic', 'normal'],
});

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  displayIntroText: boolean;
  isMainPost: boolean;
};

export default function HeroPost({
  title,
  coverImage,
  excerpt,
  displayIntroText,
  isMainPost,
  slug,
}: Props) {
  return (
    <article className='group flex flex-col border-2 border-gray-200/60 dark:border-gray-800 overflow-hidden rounded-lg'>
      <div className='md:shrink-0'>
        <CoverImage
          title={title}
          src={coverImage}
          classN='w-full object-cover object-center duration-300 group-hover:scale-110 aspect-[3/2]'
          slug={slug}
        />
      </div>

      <div className='p-4 space-y-2'>
        <div className='flex-1'>
          <h2
            className={`font-semibold text-slate-900 duration-300 group-hover:text-red-950 dark:text-slate-200 dark:group-hover:text-red-200 ${
              isMainPost ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'
            } ${roboto.className}`}>
            <Link as={`/posts/${slug}`} href='/posts/[slug]' className='block mt-2'>
              {title}
            </Link>
          </h2>
        </div>

        {displayIntroText && (
          <>
            <div className='flex flex-col'>
              <p
                className={`introtext mt-2 text-base text-gray-900 dark:text-slate-400 ${lato.className}`}>
                {excerpt}
              </p>
            </div>

            <Link
              as={`/posts/${slug}`}
              href='/posts/[slug]'
              className={`text-red-700 dark:text-red-400 inline-flex items-center ${monserrat.className}`}>
              Leer más
              <svg
                className='w-5 h-5 duration-300 group-hover:translate-x-2 text-red-700 dark:text-red-400'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          </>
        )}
      </div>
    </article>
  );
}
