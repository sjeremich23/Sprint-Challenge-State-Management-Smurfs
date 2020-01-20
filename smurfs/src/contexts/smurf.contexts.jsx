/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SmurfsContext = createContext();

export const SmurfsContextProvider = props => {
  const { children } = props;
  const [village, setVillage] = useState([]);
  const [render, setRender] = useState(false);
  const [item, setItem] = useState({
    name: "",
    age: "",
    height: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setVillage(res.data);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  }, [render]);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3333/smurfs`, item)
      .then(() => {
        setRender(!render);
        setItem({
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <SmurfsContext.Provider
      value={{
        village,
        setVillage,
        handleChange,
        handleSubmit,
        item,
        setItem,
        render,
        setRender
      }}
    >
      {children}
    </SmurfsContext.Provider>
  );
};
