import { fetchWorks } from '@/utils/fetchWorks';
import { WorkCard } from '@/components/workCard';

export default async function Home() {
  const works = await fetchWorks();

  return (
    <div className='space-y-8 @container'>
      <h1 className='text-3xl font-bold'>Works</h1>

      <ul className='grid grid-cols-1 gap-8 @[15rem]:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]'>
        {works.map((work) => (
          <WorkCard
            key={work.id}
            title={work.name}
            comment={work.explain ?? ''}
            imageSrc={work.coverImage}
            href={work.hasDetailPage ? `/works/${work.id}` : undefined}
          />
        ))}
      </ul>
    </div>
  );
}
