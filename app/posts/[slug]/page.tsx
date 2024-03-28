import { getAllPosts, getPostBySlug } from '@/lib/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/app/_components/container';
import PostHeader from '@/app/_components/post/post-header';
import PostBody from '@/app/_components/post/post-body';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className='dark:bg-gray-900'>
      <Container>
        <div className='relative mx-2'>
          <section className='prose max-w-screen-xl prose-h1:text-4xl prose-h2:mb-2 prose-figcaption:text-slate-600 prose-figcaption:font-lato prose-slate mx-auto'>
            <PostHeader data={post} />
            <PostBody data={post} />
          </section>
        </div>
      </Container>
    </main>
  );
}

// Set the metadata of the post
export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ACN`;

  return {
    title,
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}
