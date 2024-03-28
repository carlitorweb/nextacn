import { getAllPosts, getPostsByCategory } from '@/lib/api';
import Container from '@/app/_components/container';
import CategoryLeadArticle from '@/app/_components/category/category-leadarticles';
import CategoryIntroArticle from '../_components/category/category-introarticle';

type Params = {
  params: {
    category: string;
  };
};

export default async function Post({ params }: Params) {
  const catPosts = getPostsByCategory(params.category);

  return (
    <main className='dark:bg-gray-900'>
      <Container>
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
          {catPosts.slice(0, 3).map((post, index) => (
            <CategoryLeadArticle key={index} data={post} />
          ))}
        </section>

        <section className='mt-12 flex md:flex-none flex-col gap-3 md:gap-0 md:divide-y-2 md:divide-gray-200/60 dark:md:divide-gray-800'>
          {catPosts.slice(3).map((post, index) => (
            <CategoryIntroArticle key={index} data={post} />
          ))}

          <div className='flex justify-center'>
            <button className='animate-bounce px-24 py-3 mt-8 inline-flex justify-center font-roboto font-semibold text-red-950 hover:text-red-50 bg-red-50 hover:bg-red-900 dark:hover:bg-red-950 border-2 border-red-950'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 mr-4'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25'
                />
              </svg>
              Cargar más artículos
            </button>
          </div>
        </section>
      </Container>
    </main>
  );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map(post => ({
    category: post.category,
  }));
}
