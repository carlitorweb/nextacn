import { Post } from '@/interfaces/post';
import CoverImage from '@/app/_components/cover-image';
import CategoryBody from '@/app/_components/category/category-body';

type Props = {
  data: Post;
};

export default function CategoryLeadArticle({ data }: Props) {
  return (
    <article className='group flex flex-col items-start justify-between border-2 border-gray-200/60 dark:border-gray-800 rounded-lg'>
      <CoverImage
        title={data.title}
        src={data.coverImage}
        classN='aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] rounded-t-lg'
        slug={data.slug}
      />

      <div className='p-4'>
        <CategoryBody post={data} />
      </div>
    </article>
  );
}
