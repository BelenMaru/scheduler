import React from "react";

import "components/InterviewerList.scss";

import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  let interviewersArray = [];
  if (props.interviewers) {
    interviewersArray = props.interviewers.map((interviewer) => {
      return (
        <InterviewerListItem
          key={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
          setInterviewer={(e) => props.setInterviewer(interviewer.id)}
          selected={props.interviewer === interviewer.id}
        />
      );
    });
  }
  return (
    <div className="interviewers">
      <div className="interviewers__header">Interviewer</div>
      <div className="interviewers__list">{interviewersArray}</div>
    </div>
  );
}
