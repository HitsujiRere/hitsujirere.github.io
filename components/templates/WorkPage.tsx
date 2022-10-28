import { H2 } from '@/components/atoms/H2';
import { IconLink } from '@/components/atoms/IconLink';
import { Header } from '@/components/pages/Header';

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
    <div className='h-screen flex-col bg-gray-900 md:flex'>
      <div className='h-max'>
        <Header />
      </div>

      <main className='flex-1 flex-row-reverse gap-4 p-4 md:flex md:items-start md:justify-between md:overflow-y-auto'>
        <div className='space-y-8 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-thumb-rounded-full md:h-full md:w-2/5 md:overflow-y-auto md:pr-4'>
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
              <H2 title='Language, Frameworks and Library' />
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
              <div className='space-y-2'>
                {props.linkWork && (
                  <IconLink text='Work Website' to={props.linkWork} icon='external' />
                )}
                {props.linkGitHub && (
                  <IconLink text='GitHub Repository' to={props.linkGitHub} icon='github' />
                )}
              </div>
            </div>
          )}
        </div>
        <div className='space-y-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-thumb-rounded-full md:h-full md:w-3/5 md:overflow-y-auto md:pr-4'>
          {props.images.map((image, index) => {
            return (
              <img key={index} src={image} className='w-full' alt='work image' loading='lazy' />
            );
          })}
        </div>
      </main>
    </div>
  );
};
