import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchWorks } from '@/utils/fetchWorks';
import a from 'public/works-img/scratch2verilog/presentation (1).png';
import { MdLink } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';

export default async function WorkDetail({ params }: { params: { id: string } }) {
  const work = await fetchWorks().then((works) => works.find((work) => work.id === params.id));

  if (work === undefined || !work.hasDetailPage) {
    notFound();
  }

  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>{work.name}</h1>
        <p>{work.explain}</p>
      </div>
      {work.feeling && <p className='text-xl'>{work.feeling}</p>}
      <div className='space-y-4'>
        {work.charge && <p className='text-xl'>担当: {work.charge}</p>}
        {work.language && <p className='text-xl'>Languages: {work.language}</p>}
        {work.framework && <p className='text-xl'>Libraries: {work.framework}</p>}
      </div>
      <div className='flex gap-4'>
        {work.linkWork && (
          <Link href={work.linkWork} target='_blank' className='flex items-end space-x-1 p-1'>
            <MdLink size='1.75rem' color='#101010' />
            <p className='text-xl'>Work Website</p>
          </Link>
        )}
        {work.linkGitHub && (
          <Link href={work.linkGitHub} target='_blank' className='flex items-end space-x-1 p-1'>
            <SiGithub size='1.75rem' color='#181717' />
            <p className='text-xl'>GitHub Repository</p>
          </Link>
        )}
      </div>
      <div className='space-y-2'>
        <Image src={work.coverImage} alt='Image 1' width={2000} height={1500} />
        {work.images.map((image, index) => (
          <Image key={image} src={image} alt={`Image ${index + 2}`} width={2000} height={1500} />
        ))}
      </div>
    </div>
  );
}
