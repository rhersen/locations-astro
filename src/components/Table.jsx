import React from "react";
import styles from "./Table.module.css";

export default function Table({ locations }) {
  return (
    <table className={styles.counter}>
      {locations.map(
        ({
          AdvertisedLocationName,
          AdvertisedShortLocationName,
          CountryCode,
          CountyNo,
          Deleted,
          LocationSignature,
          ModifiedTime,
          Prognosticated,
        }) => (
          <tr>
            <td>{AdvertisedLocationName}</td>
            <td>{AdvertisedShortLocationName}</td>
            <td>{CountryCode}</td>
            <td>{CountyNo?.join()}</td>
            <td>{Deleted}</td>
            <td>{LocationSignature}</td>
            <td>{ModifiedTime}</td>
            <td>{Prognosticated}</td>
          </tr>
        )
      )}
    </table>
  );
}
