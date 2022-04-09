import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const Code = (props: { code: string }) => {
  return (
    <CodeMirror
      value={props.code.trim()}
      height="100%"
      extensions={[javascript({ jsx: true, typescript: true })]}
      theme="dark"
      className="text-lg"
    />
  );
};

export default Code;
