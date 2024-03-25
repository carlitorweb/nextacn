import Image from 'next/image';

export default function Logo() {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 py-1'>
      <div className='flex justify-center items-center space-x-2'>
        <Image
          src='/assets/banners/logoacn.png'
          alt='ACN'
          className='w-auto max-h-16'
          width={400}
          height={81}
        />

        <div className='hidden sm:flex'>
          <Image
            src='/assets/banners/publioferta.png'
            alt='Ofertas'
            width={1366}
            height={169}
          />
        </div>
      </div>
    </div>
  );
}
