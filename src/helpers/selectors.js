export function getAppointmentsForDay(state, day) {
  const filteredDays = state.days.filter((day_) => day_.name === day);
  const appointmentArray =
    filteredDays.length !== 0
      ? filteredDays[0].appointments.map(
          (element) => state.appointments[element]
        )
      : [];
  return appointmentArray;
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

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.find((singleDay) => singleDay.name === day);
  const interviewerArray = !filteredDays
    ? []
    : filteredDays.interviewers.map((element) => state.interviewers[element]);
  return interviewerArray;
}
