import React, { useState, useEffect } from 'react';

const Details = (props: {
  startOpen?: boolean,
  summaryOpen: JSX.Element,
  summaryClose: JSX.Element,
  child: JSX.Element,
  className?: string,
}) => {
  let [open, setOpen] = useState(props.startOpen ?? false);

  return (
    <div className={props.className}>
      <div
        onClick={() => setOpen(!open)}
        className='cursor-pointer'
      >
        {open ? props.summaryOpen : props.summaryClose}
      </div>
      {open && props.child}
    </div>
  );
}

export default Details;
