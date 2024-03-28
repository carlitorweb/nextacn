import { Post } from '@/interfaces/post';
import DateFormatter from '@/app/_components/post/date-formatter';
import { Lato, Roboto_Slab } from 'next/font/google';
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
  post: Post;
};

export default function CategoryBody({ post }: Props) {
  return (
    <>
      <div className='mt-4 flex items-center gap-x-4 text-xs text-gray-500 dark:text-gray-400'>
        <DateFormatter dateString={post.date} />
      </div>

      <Link as={`/posts/${post.slug}`} href='/posts/[slug]'>
        <h2
          className={`${roboto.className} mt-3 text-xl lg:text-2xl font-semibold text-slate-900 duration-300 group-hover:text-red-950 dark:text-slate-200 dark:group-hover:text-red-200`}>
          {post.title}
        </h2>
      </Link>

      <p
        className={`${lato.className} mt-5 line-clamp-3 text-base text-gray-900 dark:text-slate-400`}>
        {post.excerpt}
      </p>

      <div className='relative mt-8 flex items-center gap-x-4'>
        <div className='text-sm leading-6'>
          <p className={`${lato.className} font-semibold text-gray-800 dark:text-slate-400`}>
            {`Autor: ${post.author.name}`}
          </p>
        </div>
      </div>
    </>
  );
}
