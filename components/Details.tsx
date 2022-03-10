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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className='cursor-pointer relative'
        onClick={() => setOpen(!open) }
      >
        <span className={'font-mono text-gray-300 absolute -left-6 duration-500 ' + (!hover && 'text-opacity-0')}>
          {open ? 'v' : '>'}
        </span>
        {open ? props.summaryOpen : props.summaryClose}
      </div>
      <div className={!open ? 'hidden' : ''}>
        {props.child}
      </div>
    </div>
  );
}

export default Details;
