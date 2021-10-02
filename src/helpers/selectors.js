import Appointment from "components/Appointment";
import React from "react";

export function getAppointmentsForDay(state, day) {
  let appointmentsForDays = [];

  const filtered = state.days.filter((Day) => Day.name === day);

  if (filtered.length) {
    appointments = filtered[0].appointments.map(
      (appointment) => appointments[appointment]
    );
  }
  return appointmentsForDays;
}
