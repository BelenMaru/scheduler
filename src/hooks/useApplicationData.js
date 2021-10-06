import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

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
    return axios
      .put(`/api/appointments/${id}`, {
        interview,
      })
      .then((res) => {
        setState({
          ...state,
          appointments,
        });
      });
  }

  // Cancel interview
  const cancelInterview = (id) => {
    const appointment = { ...state.appointments[id] };

    appointment[id] = null;

    return axios.delete(`/api/appointments/${id}`);
  };
  return { state, setState, setDay, bookInterview, cancelInterview };
}
// useEffect(() => {
//   Promise.all([
//     axios.get("/api/days"),
//     axios.get("/api/appointments"),
//     axios.get("/api/interviewers"),
//   ]).then((all) => {
//     console.log("all[2].data", all[2].data);
//     setState((prev) => ({
//       ...prev,
//       days: all[0].data,
//       appointments: all[1].data,
//       interviewers: all[2].data,
//     }));
//   });
// }, []);
