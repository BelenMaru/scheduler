// import Appointment from "components/Appointment";
// import React from "react";

export function getAppointmentsForDay(state, day) {
  let appointmentsForDays = [];

  const filtered = state.days.filter((Day) => Day.name === day);

  if (filtered.length) {
    const appointments = filtered[0].appointments.map(
      (appointment) => appointments[appointment]
    );
  }
  return appointmentsForDays;
}

export function getInterview(state, interview) {
  if (interview) {
    const interviewerId = interview.interviewer;
    console.log("interviewer from interview ", interviewerId);
    const interviewer = state.interviewers[interviewerId];
    console.log("interviewer from state", interviewer);
    const result = {
      ...interview,
      interviewer,
    };
    console.log(result);
    return result;
  } else {
    return null;
  }
}

// interview: { student: "Chad Takahashi", interviewer: 2 },

export function getInterviewersForDay(state, day) {
  let interviewersForDays = [];

  const filtered = state.days.filter((Day) => Day.name === day);

  if (filtered.length) {
    const interviewers = filtered[0].interviewers.map(
      (interviewer) => interviewers[interviewer]
    );
  }
  return interviewersForDays;
}
