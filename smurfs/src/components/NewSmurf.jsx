/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import React, { useContext } from "react";
import { SmurfsContext } from "../contexts/smurf.contexts";

const NewSmurf = () => {
  const { handleChange, handleSubmit, item } = useContext(SmurfsContext);

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={item.name}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={item.age}
        />

        <input
          type="text"
          name="height"
          placeholder="height"
          onChange={handleChange}
          value={item.height}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSmurf;
