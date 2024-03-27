import { Post } from '@/interfaces/post';
import DateFormatter from './date-formatter';
import CastFeed from '@/app/_components/cast-feed';

type Props = {
  data: Post;
};

export default function PostBody({ data }: Props) {
  return (
    <div className='flex flex-col md:flex-row md:space-x-8 max-w-screen-lg mx-auto mt-5 md:mt-20'>
      <article className='basis-full md:basis-8/12'>
        <div className='flex justify-between items-center border-b-2 border-red-500 pb-2 mb-6 '>
          <div className='flex flex-col space-y-1'>
            <div className='text-lg font-roboto font-bold text-red-600'>
              {data.author.name}
            </div>

            <div className='flex items-center font-roboto text-xs text-gray-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              248
              <div className='md:hidden ml-4 font-roboto text-xs text-gray-400 italic'>
                <DateFormatter dateString={data.date} />
              </div>
            </div>
          </div>

          <div className='hidden md:flex flex-col items-end'>
            <div className='font-roboto text-xs text-gray-400 italic'>
              <DateFormatter dateString={data.date} />
            </div>
            <div className='font-roboto text-xs text-gray-400 italic'>hace 3 días</div>
          </div>
        </div>

        <div className='md:prose-p:first:mt-0 prose-figcaption:mb-4 prose-p:text-lg prose-p:text-gray-900 prose-p:dark:text-slate-400 prose-a:text-lg prose-a:text-red-600 prose-a:font-lato prose-a:no-underline prose-a:hover:underline'>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </article>

      <aside className='not-prose basis-full md:basis-4/12 relative'>
        <CastFeed />
      </aside>
    </div>
  );
}
