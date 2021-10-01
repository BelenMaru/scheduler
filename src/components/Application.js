import React, { useState, useEffect } from "react";

import "components/Application.scss";

import DayList from "components/DayList";

import Appointment from "./Appointment";

import axios from "axios";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },

  {
    id: 3,
    time: "3pm",
    interview: {
      student: "Archie Cohen",
      interviewer: {
        id: 1,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      },
    },
  },

  {
    id: 4,
    time: "6pm",
    interview: {
      student: "Maria Boucher",
      interviewer: {
        id: 1,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      },
    },
  },
];

export default function Application(props) {
  const [day, setDay] = useState(["Monday"]);
  // console.log(day);
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get("/api/days").then((response) => {
      // console.log(response.data);
      setDays(response.data);
    });
  }, []);

  const appointmentSomething = appointments.map((appointment) => {
    return <Appointment {...appointment} />;
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} day={day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentSomething}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
