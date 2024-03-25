import Link from 'next/link';
import CoverImage from '@/app/_components/cover-image';
import { Roboto_Slab, Lato } from 'next/font/google';

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
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  displayIntroText: boolean;
};

export default function VerticalPosts({
  title,
  coverImage,
  excerpt,
  displayIntroText,
  slug,
}: Props) {
  return (
    <Link as={`/posts/${slug}`} href='/posts/[slug]' className='group py-2'>
      <article className='grid grid-cols-3 gap-2'>
        {!displayIntroText && (
          <CoverImage
            title={title}
            src={coverImage}
            classN='w-full rounded-lg object-cover object-center aspect-[3/2]'
          />
        )}

        <div
          className={`${
            displayIntroText ? 'col-span-3' : 'col-span-2'
          } flex flex-col space-y-2`}>
          <h3
            className={`${roboto.className} text-lg font-semibold leading-6 text-gray-900 duration-300 group-hover:text-red-950 dark:text-slate-200 dark:group-hover:text-red-200`}>
            {title}
          </h3>
          {displayIntroText && (
            <div
              className={`${lato.className} text-base text-gray-900 dark:text-slate-400 line-clamp-5`}>
              {excerpt}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
