import React, { Fragment, useState, useEffect } from "react";
import SuperHeroCard from "./SuperHeroCard/SuperHeroCard";
import classes from "./SuperHeroLayout.module.css";
import {Button } from '@material-ui/core'
// import axios from "axios";
import { BASE_URL } from "../api/endpoints";
export default function SuperHeroLayout(props) {
  const [superHero, setSuperHero] = useState({});
  const superHero1 = {
    response: "success",
    id: "10",
    name: "Agent Bob ",
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
  superHero && superHero.image ? (
    <SuperHeroCard {...superHero} />
  ) : (
    <h3>Loading ...</h3>
  );
  useEffect(() => {
    loadSuperHero();
    return () => {};
  }, []);

  const getRandomSup = (event) => {
    loadSuperHero();
  };

  // load random superhero
  function loadSuperHero() {
    const url = BASE_URL + Math.floor(Math.random() * 729);
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setSuperHero({ superHero, ...JSON.parse(data.contents) });
      });
  }

  let element =
    superHero && superHero.image ? (
      <SuperHeroCard {...superHero} />
    ) : (
      <h3>Loading ....</h3>
    );
  return (
    <Fragment>
      <div className={classes.header}>
        <Button color="primary" onClick={(event) => getRandomSup(event)}>
          Random Super Hero
        </Button>
      </div>
      {element}
    </Fragment>
  );
}
