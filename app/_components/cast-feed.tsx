import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  style: ['italic', 'normal'],
});

export default function CastFeed() {
  const castFeed = [
    'Subrayan papel del MEP en la conducción de la economía',
    '¡Telón arriba! Inició el Festival Máscara de Caoba',
    'Convocan a concurso fotográfico sobre ciencia y tecnología',
    'Brilla en Italia el Ballet Nacional de Cuba',
    'ACN 40 Dúo cubano en cuartos de final Challenge del Pro Tour Mundial',
    'ACN 39 Matanzas: abundantes lluvias impactan en el cultivo de la papa',
    'ACN 38 Ratifican intención de celebrar V edición del Maratón de Varadero',
    'ACN 36 Tormentas dañan tendido eléctrico en Artemisa',
    'ACN 34 Evalúa Díaz-Canel recuperación en La Habana ante intensas lluvias',
    'ACN 33 Reporte de lluvias fuertes e intensas en occidente',
    'ACN 35 Pinar del Río reporta daños ante situación hidrometeorológica',
  ];

  return (
    <div className='flex flex-col place-items-center'>
      <div className='text-slate-950 dark:text-slate-100 font-montserrat font-bold'>
        CAST NOTICIAS
      </div>
      <div className='text-[10px] font-semibold font-roboto p-1 text-slate-200 bg-red-700 dark:bg-red-950 w-full flex justify-center'>
        PARA SUSCRIPTORES
      </div>
      <ul className='divide-y space-y-3 divide-gray-900/10 dark:divide-gray-800'>
        {castFeed.map((feed, index) => (
          <li key={`feed${index}`} className='pt-3 px-1'>
            <Link
              as='#'
              href='#'
              className={`text-xs/3 font-normal text-gray-900 duration-300 hover:text-red-950 dark:text-slate-200 dark:hover:text-red-200 ${monserrat.className}`}>
              {feed}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
