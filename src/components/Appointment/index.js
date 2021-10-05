import React, { Fragment } from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";

import Show from "components/Appointment/show";

import Empty from "components/Appointment/Empty";

import useVisualMode from "hooks/useVisualMode";

import Form from "./Form";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const SAVING = SAVING;
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer: interviewer.id,
    };
    transition(SAVING);
    bookInterview(props.id, interview).then(
      () => transition(SHOW),
      (error) => {
        console.log(save);
      }
    );
  }

  return (
    <article className="appointment">
      <Header time={props.time} id={props.id} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          appointment={props.bookInterview}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={[]} onCancel={() => back(EMPTY)} onSave={save} />
      )}

      {mode === SAVING && <Status message="Saving" />}

      {/* <Header time={props.time} />
      {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      ) : (
        <Empty onAdd={props.onAdd} />
      )} */}
    </article>
  );
}
