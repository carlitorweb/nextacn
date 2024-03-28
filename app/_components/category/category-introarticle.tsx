import { Post } from '@/interfaces/post';
import DateFormatter from '@/app/_components/post/date-formatter';
import { Lato, Roboto_Slab } from 'next/font/google';
import CoverImage from '@/app/_components/cover-image';
import Link from 'next/link';

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

type Props = {
  data: Post;
};

export default function CategoryIntroArticle({ data }: Props) {
  return (
    <Link
      as={`/posts/${data.slug}`}
      href='/posts/[slug]'
      className='relative group p-4 md:px-0 md:py-8 flex flex-col lg:flex-row justify-between md:justify-normal space-y-2 md:space-y-0 border-2 md:border-0 border-gray-200/60 dark:border-gray-800'>
      <div className='lg:w-96 md:mb-0 flex-shrink-0 flex flex-col md:order-last lg:order-none'>
        <div className='text-sm leading-6 flex justify-end md:justify-normal'>
          <p className={`${lato.className} font-semibold text-gray-800 dark:text-slate-400`}>
            {`Autor: ${data.author.name}`}
          </p>
        </div>
        <span className='mt-1 text-gray-500 text-sm flex justify-end md:justify-normal'>
          <DateFormatter dateString={data.date} />
        </span>
      </div>

      <div className='md:mr-8 order-last md:order-none md:w-3/5 lg:w-auto'>
        <h3
          className={`${roboto.className} text-lg lg:text-xl font-semibold text-slate-900 duration-300 group-hover:text-red-950 dark:text-slate-200 dark:group-hover:text-red-200 mb-2`}>
          {data.title}
        </h3>
        <div
          className={`${lato.className} line-clamp-3 md:line-clamp-2 lg:line-clamp-4 text-base text-gray-900 dark:text-slate-400`}>
          {data.excerpt}
        </div>
        <div
          className={`${lato.className} text-red-700 dark:text-red-400 inline-flex text-sm items-center mt-4`}>
          Leer más
          <svg
            className='w-4 h-4 ml-2 duration-500 group-hover:translate-x-2 text-red-700 dark:text-red-400'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </div>
      </div>

      <div className='md:absolute md:right-0 md:top-8 lg:static w-full md:max-w-72'>
        <CoverImage
          title={data.title}
          src={data.coverImage}
          classN='aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] rounded-lg'
          slug={data.slug}
        />
      </div>
    </Link>
  );
}
