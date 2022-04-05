const Code = (props: {code: string, language: string}) => {
  return (
    <div>
      <pre>
        <code className='text-xl text-gray-100'>
          {props.code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default Code;
