import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";

const CurrentNews = () => {
  const [id, setId, newsData2, setNewsData2] = useContext(NewsContext);
  console.log(newsData2);
  return (
    <div>
      {newsData2.map((news, id) => {
        // console.log(news);
        return (
          <div key={id}>
            <p>
              {news.title}
              <br></br>
            </p>
          </div>
        );
      })}
      <Button
        onClick={() => {
          window.history.back();
        }}
      >
        <img src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png" />{" "}
        Back To Admin
      </Button>
    </div>
  );
};

export default CurrentNews;
