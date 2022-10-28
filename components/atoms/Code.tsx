import { ReactNode } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { style } from 'const/SyntaxHighlightStyle';

export const Code = (props: { children: (string | string[]) & ReactNode; language: string }) => {
  return (
    <SyntaxHighlighter
      language={props.language}
      style={style}
      showLineNumbers
      className='text-base'
    >
      {props.children}
    </SyntaxHighlighter>
  );
};
