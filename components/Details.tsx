import React, { useState, useEffect } from 'react';

const Details = (props: {
  startOpen?: boolean,
  summaryOpen: JSX.Element,
  summaryClose: JSX.Element,
  child: JSX.Element,
  className?: string,
}) => {
  let [open, setOpen] = useState(props.startOpen ?? false);
  let [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={props.className}
    >
      {/* Summary */}
      <div
        className='relative'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          className={'cursor-pointer absolute p-3 -left-9 -top-3 font-mono text-gray-300 duration-500 ' + (!hover && 'text-opacity-0')}
          onClick={() => setOpen(!open)}
        >
          {open ? 'v' : '>'}
        </span>
        {open ? props.summaryOpen : props.summaryClose}
      </div>

      {/* Child */}
      <div className={!open ? 'hidden' : ''}>
        {props.child}
      </div>
    </div>
  );
}

export default Details;
