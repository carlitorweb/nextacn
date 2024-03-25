import VerticalPosts from '@/app/_components/vertical-posts';
import { Post } from '@/interfaces/post';

type Props = {
  posts: Post[];
};

export default function LastInCuba({ posts }: Props) {
  return (
    <div className='flex flex-col gap-1 border-t-2 lg:border-t-4 border-red-700 dark:border-red-400 divide-y divide-gray-900/10 dark:divide-gray-800'>
      <div className='text-red-700 dark:text-red-400 font-roboto tracking-tight text-xl lg:text-2xl mt-2'>
        Lo más reciente en Cuba
      </div>

      {posts.length > 0 &&
        posts.map((post, index) => (
          <VerticalPosts
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
            displayIntroText={index > 3 ? true : false}
          />
        ))}
    </div>
  );
}
