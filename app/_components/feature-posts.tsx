import HeroPost from '@/app/_components/hero-posts';
import { Post } from '@/interfaces/post';

type Props = {
  posts: Post[];
};

export default function FeaturePosts({ posts }: Props) {
  const heroPost = posts[0];
  const moreHeroPosts = posts.slice(1);

  return (
    <div className='grid md:grid-cols-2 gap-5'>
      <div className='md:col-span-2'>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          displayIntroText={true}
          isMainPost={true}
        />
      </div>

      {moreHeroPosts.length > 0 &&
        moreHeroPosts.map(post => (
          <HeroPost
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
            displayIntroText={false}
            isMainPost={false}
          />
        ))}
    </div>
  );
}
