// import Appointment from "components/Appointment";
// import React from "react";

export function getAppointmentsForDay(state, day) {
  // let appointmentsForDays = [];

  // const filtered = state.days.filter((Day) => Day.name === day);

  // if (filtered.length) {
  //   const appointment = filtered[0].appointments.map(
  //     (appointment) => appointments[appointment]
  //   );
  // }
  // return appointmentsForDays;

  const filteredDays = state.days.filter((day_) => day_.name === day);
  const appointmentArray =
    filteredDays.length !== 0
      ? filteredDays[0].appointments.map(
          (element) => state.appointments[element]
        )
      : [];
  return appointmentArray;
  // }
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
  const foundDay = state.days.find((day_) => day_.name === day);
  // const interviewerArray =
  if (state.days.length === 0 || foundDay === undefined) return []
    
    return foundDay.interviewers.map((element) => state.interviewers[element]);
  // return interviewerArray;
  // let interviewersForDays = [];

  // const filtered = state.days.filter((Day) => Day.name === day);

  // if (filtered.length) {
  //   const interviewers = filtered[0].interviewers.map(
  //     (interviewer) => interviewers[interviewer]
  //   );
  // }
  // return interviewersForDays;
}

// const interviewersForDays = filteredDays[0]["appointments"];
// const filteredArr = [];
// if (interviewersForDays.length === 0) {
//   return [];
// }
// for (const id of interviewersForDays) {
//   filteredArr.push(state.appointments[id]);
// }
// return filteredArr;

// if(!state.days){
//   return [];
// }
// let theDay = state.days.filter(d => d.name === day)[0];
// if(!theDay){
//   return [];
// }
// let result = [];
// for(const id of theDay.appointments){
//   const appointmentObj = state.appointments[id];
//   result.push(appointmentObj);
// }
// return result;
