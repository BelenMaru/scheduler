import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // Update spot to loop through each days array,days appointment array,check if null and set number to spots remaining without mutating state

  const spotsRemaining = (day, appointments) => {
    const dayFound = state.days.find((dayObj) => dayObj.name === day);
    const apptList = dayFound.appointments.map((appId) => appointments[appId]);
    const numOfSpots = apptList.filter(
      (appointment) => appointment.interview === null
    ).length;
    return numOfSpots;
  };

  // creating appointment
  function bookInterview(id, interview) {
    console.log(id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const numOfSpots = spotsRemaining(state.day, appointments);
    const updatedDays = state.days.map((dayObj) => {
      if (dayObj.appointments.includes(id)) {
        const newDay = { ...dayObj, spots: numOfSpots };
        return newDay;
      }
      return dayObj;
    });
    console.log("numOfSpots!!!!", numOfSpots);

    return axios
      .put(`/api/appointments/${id}`, {
        interview,
      })
      .then((res) => {
        setState({
          ...state,
          appointments,
          days: updatedDays,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  // Cancel interview
  const cancelInterview = (id) => {
    const appointment = { ...state.appointments[id], interview: null };
    // appointment[id] = null;

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const numOfSpots = spotsRemaining(state.day, appointments);
    const updatedDays = state.days.map((dayObj) => {
      if (dayObj.appointments.includes(id)) {
        const newDay = { ...dayObj, spots: numOfSpots };
        return newDay;
      }
      return dayObj;
    });

    return axios
      .delete(`/api/appointments/${id}`, { interview: null })
      .then((res) => {
        setState({
          ...state,
          appointments,
          days: updatedDays,
        });
      });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      console.log("all[2].data", all[2].data);
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  const setDay = (day) =>
    setState((prev) => {
      return { ...prev, day };
    });

  return { state, setDay, bookInterview, cancelInterview };
}
