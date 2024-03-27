import { Post } from '@/interfaces/post';
import { Lato, Roboto_Slab } from 'next/font/google';
import Image from 'next/image';

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
  data: Post;
};

export default function PostHeader({ data }: Props) {
  return (
    <>
      <h1
        className={`${roboto.className} mb-8 max-w-screen-lg mx-auto font-semibold text-slate-900 dark:text-slate-200`}>
        {data.title}
      </h1>

      <div className='flex flex-col md:flex-row justify-between prose-figure:m-0 max-w-screen-lg mx-auto'>
        <div className="flex flex-col justify-between prose-p:text-xl md:prose-p:first:mt-0 basis-full <?php echo isset($isMainVertical) && $isMainVertical ? 'md:basis-8/12 md:px-4' : ($hasImage ? 'md:basis-4/12 md:px-4' : ''); ?>">
          <div>
            <p
              className={`${lato.className} text-gray-900 dark:text-slate-400 first-letter:float-left first-letter:mr-4 first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:dark:text-red-900`}>
              {data.excerpt}
            </p>

            <h4>Compartir</h4>
            <div className='flex gap-2'>
              <a
                className='inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 dark:bg-sky-950 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 dark:hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:focus-visible:outline-sky-700 no-underline'
                href='#'
                target='_blank'>
                <svg
                  className='-ml-0.5 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
                </svg>
                Twitter
              </a>
              <a
                className='inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 dark:bg-sky-950 px-1.5 py-0.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 dark:hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:focus-visible:outline-sky-700 no-underline'
                href='#'
                target='_blank'>
                <svg
                  className='-ml-0.5 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'></path>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          <div className='hidden md:flex italic text-slate-600 font-lato text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
        </div>

        <div className="basis-full <?php echo $isMainVertical ? 'md:basis-4/12' : 'md:basis-8/12'; ?>                                         <?php echo $mainImageFlotation === 'left' ? 'order-first' : ''; ?>">
          <figure>
            <Image
              src={data.coverImage}
              alt={`Cover Image for ${data.title}`}
              className='border-1 border-slate-950 w-full aspect-[3/2]'
              width={700}
              height={466}
            />

            <figcaption className='italic md:hidden'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima amet eum
              dolorum. Consequuntur natus obcaecati ipsam? Nisi placeat modi eum, facere eius
              quod pariatur ducimus quibusdam distinctio adipisci provident mollitia.
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
