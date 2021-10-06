import React, { Fragment } from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";

import Show from "components/Appointment/show";

import Empty from "components/Appointment/Empty";

import useVisualMode from "hooks/useVisualMode";

import Form from "./Form";

import Status from "components/Appointment/Status";

import Confirm from "components/Appointment/Confirm";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const CONFIRM = "CONFIRM";

  // Saving appointments
  function save(name, interviewer) {
    // console.log(name, interviewer);
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(
      () => transition(SHOW),
      (error) => {
        console.log(save);
      }
    );
  }

  // Delete appointments
  function remove() {
    transition(DELETING, true);
    props.cancelInterview(props.id).then(() => {
      transition(EMPTY);
    });
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  console.log("props.interviewers", props.interviewers);

  return (
    <article className="appointment">
      <Header time={props.time} id={props.id} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          interviewers={props.interviewers}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back(EMPTY)}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}

      {mode === CONFIRM && (
        <Confirm
          message="Would you like to delete?"
          onConfirm={remove}
          onCancel={() => back()}
        />
      )}

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
