import React, { useState, createContext, useEffect } from "react";

import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [id, setId] = useState([0]);
  const [newsData2, setNewsData2] = useState([]);

  useEffect(() => {
    let url = "http://localhost:5000/routes/news";
    axios
      .get(url)
      .then((response) => {
        setNewsData2(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <NewsContext.Provider value={[id, setId, newsData2, setNewsData2]}>
      {props.children}
    </NewsContext.Provider>
  );
};
