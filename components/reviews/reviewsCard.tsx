import { ReviewsCardProps } from "@/lib/types/locationProps";
import StarsRating from "./reviewsRating";
import { useTranslations } from "next-intl";

export default function ReviewCard({ name, source, rating, text }: ReviewsCardProps) {

    const translation = useTranslations('reviews');

    return (
      <div className="flex flex-col gap-4 w-[90%] md:w-[30%] h-[30%] md:h-full items-center justify-start">
        <div className="flex md:flex-row gap-2 w-full items-center justify-between">
          <p className="md:text-lg font-medium">{name} <span className="text-gray-300 font-normal">{translation("en")} {source}</span></p><br />
          <StarsRating rating={rating} />
        </div>
        <p>{text}</p>
      </div>
    );
  }