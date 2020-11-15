import React, { Fragment } from "react";
import classes from "./SuperHeroCard.module.css";

function SuperHeroCard(props) {
  return (
    props.image? <Fragment>
    <div className={classes.superHeroContainer}>
      <div className={classes.imageHolder}>
        <img src={props.image.url} alt="profile-pic" />
      </div>
      <div>
        <div>
          <span className={classes.propertyName}>ID</span>{" "}
          <span className={classes.propertyValue}>{props.id}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Name</span>{" "}
          <span className={classes.propertyValue}>{props.name}</span>
        </div>
        {/* Biography */}
        <div>
          <span className={classes.propertyName}>Full Name</span>{" "}
          <span className={classes.propertyValue}>{props.biography["full-name"]}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Alter Egos</span>{" "}
          <span className={classes.propertyValue}>{props.biography['alter-egos']}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Aliases</span>{" "}
          <span className={classes.propertyValue}>{props.biography.aliases.toString()}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Place of Birth</span>{" "}
          <span className={classes.propertyValue}>{props.biography['place-of-birth']}</span>
        </div>
        <div>
          <span className={classes.propertyName}>First Appearance</span>{" "}
          <span className={classes.propertyValue}>{props.biography['first-appearance']}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Publisher</span>{" "}
          <span className={classes.propertyValue}>{props.biography.publisher}</span>
        </div>
        <div>
          {" "}
          <span className={classes.propertyName}>Alignment</span>{" "}
          <span className={classes.propertyValue}>{props.biography.alignment}</span>
        </div>
        {/* appearance */}
        <div>
          <span className={classes.propertyName}>Gender</span>{" "}
          <span className={classes.propertyValue}>{props.appearance.gender}</span>
        </div>
        <div>
          {" "}
          <span className={classes.propertyName}>Race</span>{" "}
          <span className={classes.propertyValue}>{props.appearance.race}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Height</span>{" "}
          <span className={classes.propertyValue}>{props.appearance.height.toString()}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Weight</span>{" "}
          <span className={classes.propertyValue}>{props.appearance.weight.toString()}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Eye Color</span>{" "}
          <span className={classes.propertyValue}>{props.appearance['eye-color']}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Hair Color</span>{" "}
          <span className={classes.propertyValue}>{props.appearance['hair-color']}</span>
        </div>
        {/* work */}
        <div>
          <span className={classes.propertyName}>Work</span>{" "}
          <span className={classes.propertyValue}>{props.work.occupation}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Base</span>{" "}
          <span className={classes.propertyValue}>{props.work.base}</span>
        </div>
        {/* connections */}
        <div>
          <span className={classes.propertyName}>Group Affiliation</span>{" "}
          <span className={classes.propertyValue}>{props.connections['group-affiliation']}</span>
        </div>
        <div>
          <span className={classes.propertyName}>Relatives</span>{" "}
          <span className={classes.propertyValue}>{props.connections.relatives}</span>
        </div>
      </div>
    </div>
  </Fragment> : <h3>Loading</h3>
  );
}

export default SuperHeroCard;
