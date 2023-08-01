import { MdStar, MdStarBorder } from 'react-icons/md';
import { IconCard, IconCardProps } from '@/components/iconCard';

export const SkillCard = ({
  stars,
  ...rem
}: {
  stars: number;
} & IconCardProps) => {
  return (
    <IconCard {...rem}>
      {stars && (
        <div className='flex justify-center'>
          {[1, 2, 3, 4, 5].map((star) =>
            star <= stars! ? (
              <MdStar key={star} size='1rem' className='text-yellow-500' />
            ) : (
              <MdStarBorder key={star} size='1rem' className='text-yellow-400' />
            ),
          )}
        </div>
      )}
    </IconCard>
  );
};
