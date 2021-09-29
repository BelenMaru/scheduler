import React from "react";

import classNames from "classnames";


import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props){
  console.log(props , 'this is the props')

  const interviewerClass = classNames ( 
    "interviewers__item" , {
    "interviewers__item--selected": props.selected
    });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
    <img 
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
  />
    {props.name}
</li>

  );

}



