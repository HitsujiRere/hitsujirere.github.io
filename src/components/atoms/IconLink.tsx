import Link from 'next/link';
import { IconContext } from 'react-icons';
import { RiGithubLine, RiTwitterLine, RiExternalLinkLine } from 'react-icons/ri';

export const IconLink = (props: {
  icon: 'github' | 'twitter' | 'external';
  to: string;
  text: string;
}) => {
  const { icon, to, text } = props;

  return (
    <Link
      href={to}
      className='flex text-green-500 duration-500 hover:text-green-700'
      target='__blank'
    >
      <IconContext.Provider value={{ size: '1.75rem' }}>
        {icon === 'github' && <RiGithubLine />}
        {icon === 'twitter' && <RiTwitterLine />}
        {icon === 'external' && <RiExternalLinkLine />}
      </IconContext.Provider>
      <p className='text-lg'>{text}</p>
    </Link>
  );
};
