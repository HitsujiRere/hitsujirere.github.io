import Link from 'next/link';
import { H2 } from '@/components/atoms/H2';
import { IconLink } from '@/components/atoms/IconLink';

export const WorkPage = (props: {
  name: string;
  explains: string[];
  charge?: string;
  languages?: string;
  frameworks?: string;
  feelings?: string[];
  linkWork?: string;
  linkGitHub?: string;
  images: string[];
}) => {
  return (
    <div className='md:h-screen bg-gray-900'>
      <div className='md:pt-24 md:h-full md:flex md:justify-between md:items-center'>
        <div className='md:w-2/5 md:h-full px-4 py-4 md:overflow-y-scroll md:hide-scrollbar space-y-12 md:text-right'>
          <div className='space-y-4'>
            <p className='text-5xl font-bold text-white'>{props.name}</p>
            <div>
              {props.explains.map((text, index) => {
                return (
                  <p key={index} className='text-xl font-bold text-gray-400'>
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
          {props.charge && (
            <div className='space-y-4'>
              <H2 title='Charge' />
              <div>
                <p className='text-2xl text-white'>{props.charge}</p>
              </div>
            </div>
          )}
          {(props.languages || props.frameworks) && (
            <div className='space-y-4'>
              <H2 title='Language and Frameworks' />
              <div>
                {props.languages && <p className='text-2xl text-white'>{props.languages}</p>}
                {props.frameworks && <p className='text-2xl text-white'>{props.frameworks}</p>}
              </div>
            </div>
          )}
          {props.feelings && (
            <div className='space-y-4'>
              <H2 title='Feelings' />
              <div>
                {props.feelings.map((text, index) => {
                  return (
                    <p key={index} className='text-2xl text-white'>
                      {text}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {(props.linkWork || props.linkGitHub) && (
            <div className='space-y-4'>
              <H2 title='Links' />
              <div className='flex flex-col space-y-2'>
                {props.linkWork && (
                  <IconLink
                    text='Work Website'
                    to={props.linkWork}
                    icon='external'
                    className='justify-end'
                  />
                )}
                {props.linkGitHub && (
                  <IconLink
                    text='GitHub Repository'
                    to={props.linkGitHub}
                    icon='github'
                    className='justify-end'
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className='md:w-3/5 md:h-full p-4 md:overflow-y-scroll md:hide-scrollbar space-y-4'>
          {props.images.map((image, index) => {
            return <img key={index} src={image} alt='work image' loading='lazy' />;
          })}
        </div>
      </div>
    </div>
  );
};
