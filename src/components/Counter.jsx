import React from "react";
import styles from "./Counter.module.css";

export default function Counter({ locations }) {
  return (
    <ol className={styles.counter}>
      {locations.map((location) => (
        <li>{location.AdvertisedLocationName}</li>
      ))}
    </ol>
  );
}
