/* eslint-disable no-console */
import React, { useContext } from "react";
import { SmurfsContext } from "../contexts/smurf.contexts";

const Village = () => {
  const { village } = useContext(SmurfsContext);

  return (
    <div>
      <h1>Smurfs in Village</h1>
      {village.map((el, i) => (
        <>
          <p>
            Name:
            {village[i].name}
          </p>
          <p>
            Age:
            {village[i].age}
          </p>

          <p>
            Height:
            {village[i].height}
          </p>
        </>
      ))}
    </div>
  );
};

export default Village;
