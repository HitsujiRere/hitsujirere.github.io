import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { EditorView } from "@codemirror/view"

const Code = (props: {code: string}) => {
  return (
    <CodeMirror
      value={props.code.trim()}
      height='100%'
      extensions={[javascript({ jsx: true, typescript: true })]}
      theme='dark'
      editable={false}
      className='text-lg'
    />
  );
};

export default Code;
