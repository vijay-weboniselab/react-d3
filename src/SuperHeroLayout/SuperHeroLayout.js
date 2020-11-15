import React, { Fragment, useState } from "react";
import SuperHeroCard from "./SuperHeroCard/SuperHeroCard";
import classes from "./SuperHeroLayout.module.css";
// import axios from "axios";
import { BASE_URL } from "../api/endpoints";
export default function SuperHeroLayout(props) {
  const [superHero, setSuperHero] = useState({});
  const superHero1 = {
    response: "success",
    id: "10",
    name: "Agent Bob",
    powerstats: {
      intelligence: "10",
      strength: "8",
      speed: "13",
      durability: "5",
      power: "5",
      combat: "20",
    },
    biography: {
      "full-name": "Bob",
      "alter-egos": "No alter egos found.",
      aliases: ["Bob", "agent of Hydra", "Bob", "agent of A.I.M"],
      "place-of-birth": "-",
      "first-appearance": "Cable & Deadpool #38 (May, 2007)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["181 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown",
    },
    work: {
      occupation: "Mercenary, janitor; former pirate, terrorist",
      base: "Mobile; formerly Manhattan, Hellcarrier",
    },
    connections: {
      "group-affiliation": "A.I.M., Deadpool; formerly Agency X, Hydra",
      relatives: "Allison (ex-wife); Terry and Howie (sons)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10255.jpg",
    },
  };

  const getRandomSup = (event) => {
    event.preventDefault();
    // axios(BASE_URL + Math.floor(Math.random() * 729), {
    //   method: "GET",
    //   mode : "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Headers":
    //       "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Auth-Token",
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    // fetch
    const url = BASE_URL + Math.floor(Math.random() * 729);
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        url
      )}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
          console.log(data.contents);
          setSuperHero(data.contents);
      });
  };

  return (
    <Fragment>
      <button onClick={(event) => getRandomSup(event)}>
        Random Super Hero
      </button>
      <SuperHeroCard {...superHero} />
    </Fragment>
  );
}
