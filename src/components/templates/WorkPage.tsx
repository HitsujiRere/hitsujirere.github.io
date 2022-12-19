import Head from 'next/head';
import { H3 } from '@/components/atoms/H3';
import { IconLink } from '@/components/atoms/IconLink';
import { Header } from '@/components/pages/Header';

export const WorkPage = (props: {
  name: string;
  explain: string;
  charge?: string;
  language?: string;
  framework?: string;
  feeling?: string;
  linkWork?: string;
  linkGitHub?: string;
  images: string[];
}) => {
  return (
    <>
      <Head>
        <title>Hitsuji Rere 🐏 - {props.name}</title>
        <meta name='description' content={`Rere's Portfolio - ${props.name}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex-col bg-zinc-100 md:flex md:h-screen'>
        <div className='h-max'>
          <Header />
        </div>

        <main className='flex flex-1 flex-col gap-y-8 gap-x-4 p-4 md:flex-row-reverse md:items-start md:justify-between md:overflow-y-auto'>
          <div className='space-y-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-thumb-rounded-full md:h-full md:w-2/5 md:overflow-y-auto md:pr-2'>
            <div>
              <h2 className='mb-8 text-3xl font-bold'>{props.name}</h2>
              <p className='whitespace-pre-line'>{props.explain}</p>
            </div>
            {props.charge && (
              <div>
                <H3 title='Charge' />
                <div>
                  <p>{props.charge}</p>
                </div>
              </div>
            )}
            {(props.language || props.framework) && (
              <div>
                <H3 title='Language, Frameworks and Library' />
                <div className='space-y-2'>
                  {props.language && <p>{props.language}</p>}
                  {props.framework && <p>{props.framework}</p>}
                </div>
              </div>
            )}
            {props.feeling && (
              <div>
                <H3 title='Feelings' />
                <p className='whitespace-pre-line'>{props.feeling}</p>
              </div>
            )}
            {(props.linkWork || props.linkGitHub) && (
              <div>
                <H3 title='Links' />
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
          <div className='space-y-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-thumb-rounded-full md:h-full md:w-3/5 md:overflow-y-auto md:pr-2'>
            {props.images.map((image, index) => {
              return (
                <img key={index} src={image} className='w-full' alt='work image' loading='lazy' />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};
