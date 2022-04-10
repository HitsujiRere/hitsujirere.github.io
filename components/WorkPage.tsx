import Link from 'next/link';

const WorkPage = (props: {
    name: string,
    explains: string[],
    charge?: string,
    languages?: string,
    frameworks?: string,
    feelings?: string[],
    linkWork?: string,
    linkGitHub?: string,
    images: string[]
  }) => {

  return (
    <div className="md:h-screen bg-gray-900">
      <div className="md:pt-24 md:h-full md:flex md:justify-between md:items-center">
        <div className="md:w-2/5 md:h-full px-4 py-4 md:overflow-y-scroll md:hide-scrollbar space-y-12 md:text-right">
          <div className="space-y-4">
            <p className="text-5xl font-bold text-white">{props.name}</p>
            <div>
              {props.explains.map((text, index) => {
                return (
                  <p key={index} className="text-xl font-bold text-gray-400">{text}</p>
                );
              })}
            </div>
          </div>
          {props.charge && (
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-yellow-400">Charge</h2>
              <div>
                <p className="text-2xl text-white">{props.charge}</p>
              </div>
            </div>
          )}
          {(props.languages || props.frameworks) && (
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-yellow-400">Language and Frameworks</h2>
              <div>
                {props.languages && <p className="text-2xl text-white">{props.languages}</p>}
                {props.frameworks && <p className="text-2xl text-white">{props.frameworks}</p>}
              </div>
            </div>
          )}
          {props.feelings && (
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-yellow-400">Feelings</h2>
              <div>
                {props.feelings.map((text, index) => {
                  return (
                    <p key={index} className="text-2xl text-white">{text}</p>
                  );
                })}
              </div>
            </div>
          )}
          {(props.linkWork || props.linkGitHub) && (
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-yellow-400">Links</h2>
              <div className="space-y-2">
                {props.linkWork && (
                  <div className="text-green-300 hover:text-green-600 duration-500">
                    <Link href={props.linkWork}>
                      <a className="flex justify-start md:justify-end">
                        <p className="text-xl">Work Website</p>
                        <svg className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />  <line x1="10" y1="14" x2="20" y2="4" />  <polyline points="15 4 20 4 20 9" /></svg>
                      </a>
                    </Link>
                  </div>
                )}
                {props.linkGitHub && (
                  <div className="text-green-300 hover:text-green-600 duration-500">
                    <Link href={props.linkGitHub}>
                      <a className="flex justify-start md:justify-end">
                        <p className="text-xl">GitHub Repository</p>
                        <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="md:w-3/5 md:h-full p-4 md:overflow-y-scroll md:hide-scrollbar space-y-4">
          {props.images.map((image, index) => {
            return (
              <img key={index} src={image} alt="work image" loading="lazy" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
