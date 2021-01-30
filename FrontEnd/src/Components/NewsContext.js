import React, { useState, createContext, useEffect } from "react";
import FullNews from "./FullNews";
import HomePage from "./HomePage";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [id, setId] = useState([0]);
  const [newsData2, setNewsData2] = useState([]);

  useEffect(() => {
    let url =
      "http://newsapi.org/v2/top-headlines?country&category=general&apiKey=b2a6834190c449ed8627c2722238309a";
    axios
      .get(url)
      .then((response) => {
        setNewsData2(response.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <NewsContext.Provider value={[id, setId, newsData2, setNewsData2]}>
      {props.children}
    </NewsContext.Provider>
  );
};
