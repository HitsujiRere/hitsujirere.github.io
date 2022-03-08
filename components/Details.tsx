import React, { useState, useEffect } from 'react';

const Details = (props: {
  open?: boolean,
  summaryOpen: string,
  summaryClose: string,
  className?: string,
  child: JSX.Element,
}) => {
  let [open, setOpen] = useState(props.open ?? false);
  let [summary, setSummary] = useState("");

  useEffect(() => {
    setSummary(open ? props.summaryOpen : props.summaryClose);
  }, [summary, open, props.summaryOpen, props.summaryClose]);

  return (
    <details
      open={props.open}
      onToggle={(e) => {
        console.log(summary);
        setOpen(!open);
      }}
      className={props.className}
    >
      <summary className='block cursor-pointer'>
        <span className=''>{summary}</span>
      </summary>
      {props.child}
    </details>
  );
}

export default Details;
