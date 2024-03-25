import CoverImage from '@/app/_components/cover-image';
import Link from 'next/link';

import { Lato, Roboto_Slab, Montserrat } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '900'],
  style: ['italic', 'normal'],
});

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  style: ['italic', 'normal'],
});

const roboto = Roboto_Slab({
  variable: '--roboto-slab',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  showCategory: boolean;
};

export default function RowPosts({
  title,
  coverImage,
  excerpt,
  date,
  slug,
  showCategory,
}: Props) {
  return (
    <article className='flex flex-col border-2 border-gray-200/60 dark:border-gray-800 overflow-hidden rounded-lg'>
      <div className='md:shrink-0'>
        <CoverImage
          title={title}
          src={coverImage}
          classN='w-full object-cover object-center aspect-[3/2]'
          slug={slug}
        />

        <div className='p-4 space-y-2'>
          <div className='flex items-center gap-x-4 text-xs'>
            <time
              dateTime={date}
              className={`${monserrat.className} text-gray-500 dark:text-gray-400`}>
              hace 3 días
            </time>
            {showCategory && (
              <div className='hover:underline font-medium text-gray-600 dark:text-gray-400'>
                <Link as='#' href='#' className={`${monserrat.className}`}>
                  Cuba
                </Link>
              </div>
            )}
          </div>

          <div className='flex-1'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]' className='block mt-2'>
              <h3
                className={`${roboto.className} font-semibold text-slate-900 duration-300 hover:text-red-950 dark:text-slate-200 dark:hover:text-red-200`}>
                {title}
              </h3>
            </Link>
          </div>

          <div className='flex flex-col'>
            <p
              className={`${lato.className} line-clamp-4 mt-2 text-base text-gray-900 dark:text-slate-400`}>
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
