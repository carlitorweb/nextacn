import Container from '@/app/_components/container';
import { getAllPosts } from '@/lib/api';
import { Post } from '@/interfaces/post';
import CastFeed from '@/app/_components/cast-feed';
import LastInCuba from '@/app/_components/last-incuba';
import FeaturePosts from '@/app/_components/feature-posts';
import Image from 'next/image';
import Destacamos from '@/app/_components/destacamos';
import Services from '@/app/_components/services';
import Especiales from './_components/especiales';

export default function Home() {
  const allPosts = getAllPosts();

  const featurePosts: Post[] = [];
  const normalPosts: Post[] = [];

  allPosts.forEach(post => {
    post.feature ? featurePosts.push(post) : normalPosts.push(post);
  });

  return (
    <main className='dark:bg-gray-900'>
      <Container>
        {/* Main Section */}
        <div className='grid grid-cols-1 md:grid-cols-7 lg:grid-cols-6 gap-4'>
          <div className='md:col-span-4 lg:col-span-3'>
            <FeaturePosts posts={featurePosts} />
          </div>

          <div className='md:col-span-3 lg:col-span-2'>
            <LastInCuba posts={normalPosts} />
          </div>
          <div className='md:col-span-7 lg:col-auto'>
            <CastFeed />
          </div>
        </div>

        {/* Promo */}
        <div className='mt-2'>Publicidad </div>
        <Image
          src='/assets/banners/banner-componenteselectronicos.png'
          alt={`Empresa Componentes Electrónicos P1`}
          width={1300}
          height={70}
        />

        {/* Row Section */}
        <Destacamos posts={normalPosts.slice(0, 4)} />

        <Services />

        {/* Row Section */}
        <Especiales posts={normalPosts.slice(0, 2)} />
      </Container>
    </main>
  );
}
