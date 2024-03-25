import { Roboto_Slab } from 'next/font/google';
import { Post } from '@/interfaces/post';
import RowPosts from '@/app/_components/row-posts';

const roboto = Roboto_Slab({
  variable: '--roboto-slab',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

type Props = {
  posts: Post[];
};

export default function Destacamos({ posts }: Props) {
  return (
    <>
      <div
        className={`${roboto.className} flex justify-center py-2 mb-4 mt-8 text-red-700 dark:text-red-400 tracking-tight text-xl lg:text-2xl border-t-2 lg:border-t-4 border-t-red-700 dark:border-t-red-400 border-b-2 border-b-gray-900/10 dark:border-b-gray-800`}>
        Destacamos
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {posts.length > 0 &&
          posts.map(post => (
            <RowPosts
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              slug={post.slug}
              excerpt={post.excerpt}
              date={post.date}
              showCategory={true}
            />
          ))}
      </div>
    </>
  );
}
