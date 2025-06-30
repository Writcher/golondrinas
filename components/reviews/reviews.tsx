import ReviewCard from './reviewsCard';
import { useTranslations } from 'next-intl';

export default function Reviews() {

  const translation = useTranslations('reviews');

  const reviews = [
    { name: 'Micaela Buscemi', source: 'Google', rating: 5, text: translation('review1') },
    { name: 'Carla Gimenez', source: 'Google', rating: 5, text: translation('review2') },
    { name: 'Liliana Andrea Bridge', source: 'Google', rating: 4, text: translation('review3') },
    { name: 'Mariana Mambrín', source: 'Google', rating: 5, text: translation('review4') },
    { name: 'María M. C.', source: 'Google', rating: 4, text: translation('review5') },
    { name: 'Maximiliano Olivera', source: 'Google', rating: 5, text: translation('review6') },
  ];

  return (
    <div className="flex flex-col h-[80%] md:h-[60%] md:gap-8 w-full items-center justify-center pt-40 md:pt-0">
      <h2 className="text-2xl font-semibold">{translation("title")}</h2>
      <div className="hidden md:flex flex-row gap-8 h-full w-full items-center justify-center">
        <ReviewCard {...reviews[0]}/>
        <ReviewCard {...reviews[1]}/>
        <ReviewCard {...reviews[2]}/>
      </div>
      <div className="md:hidden flex flex-col gap-24 h-full w-full items-center justify-center">
        <ReviewCard {...reviews[0]}/>
        <ReviewCard {...reviews[1]}/>
      </div>
      <div className="hidden md:flex flex-row gap-8 h-full w-full items-center justify-center">
        <ReviewCard {...reviews[3]}/>
        <ReviewCard {...reviews[4]}/>
        <ReviewCard {...reviews[5]}/>
      </div>
    </div>
  )
}