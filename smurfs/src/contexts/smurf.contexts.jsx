/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SmurfsContext = createContext();

export const SmurfsContextProvider = props => {
  const { children } = props;
  const [village, setVillage] = useState([]);
  const [item, setItem] = useState();
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        // console.log("response", res);
        setVillage(res.data);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  }, [render]);

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios()
      .put("http://localhost:3333/smurfs", item)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err, err.response);
      });
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
