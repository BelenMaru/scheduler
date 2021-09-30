import React from "react";

import classNames from "classnames";

import "components/InterviewerList.scss";

import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={props.setInterviewer}
      selected={props.interviewer === interviewer.id}
      />
    );
  });
  return (
    <div className="interviewers">
      <div className="interviewers__header">Interviewer</div>
      <div className="interviewers__list">{interviewers}</div>
    </div>
  );
}
