/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import React, { useContext } from "react";
import axios from "axios";
import { SmurfsContext } from "../contexts/smurf.contexts";

const NewSmurf = () => {
  const { handleChange, item, render, setRender } = useContext(SmurfsContext);
  // const [item, setItem] = useState();
  // const [render, setRender] = useState(false);
  console.log("items", item);

  // const handleChange = e => {
  //   setItem({ ...item, [e.target.name]: e.target.value });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3333/smurfs`, item)
      .then(res => {
        setRender(!render);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />

        <input
          type="text"
          name="height"
          placeholder="height"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSmurf;
