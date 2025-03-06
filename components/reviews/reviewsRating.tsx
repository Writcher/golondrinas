import { ReviewsRatingProps } from '@/lib/types/locationProps';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function StarsRating({ rating }: ReviewsRatingProps) {
    const stars = Array.from({ length: 5 }, (_, index) => index < rating ? <StarIcon key={index} /> : <StarOutlineIcon key={index} />);
    return <div className="flex text-yellow-400">{stars}</div>;
}