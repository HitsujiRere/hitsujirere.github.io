import Link from 'next/link';
import { IconContext } from 'react-icons';
import { RiGithubLine, RiTwitterLine, RiExternalLinkLine } from 'react-icons/ri';

export const IconLink = (
  props: {
    icon: 'github' | 'twitter' | 'external';
    to: string;
    text: string;
  } & JSX.IntrinsicElements['a'],
) => {
  const { icon, to, text, ...aProps } = props;

  return (
    <Link href={to}>
      <a
        {...aProps}
        className={`flex text-green-500 hover:text-green-300 duration-500 ${aProps.className}`}
      >
        <IconContext.Provider value={{ size: '2rem' }}>
          {icon === 'github' && <RiGithubLine />}
          {icon === 'twitter' && <RiTwitterLine />}
          {icon === 'external' && <RiExternalLinkLine />}
        </IconContext.Provider>
        <p className='text-xl'>{text}</p>
      </a>
    </Link>
  );
};
