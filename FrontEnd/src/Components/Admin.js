import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "./NewsContext";

const Admin = () => {
  const [id, setId, newsData2, setNewsData2] = useContext(NewsContext);
  return (
    <div className="container">
      <h1>Admin Page!</h1>
      <Button>
        <Link to="/currentNews" style={{ textDecoration: "none" }}>
          Current News
        </Link>
      </Button>
      <Button>
        <Link to="/addNews" style={{ textDecoration: "none" }}>
          Add News
        </Link>
      </Button>
      <Button>
        <Link to="/deleteNews" style={{ textDecoration: "none" }}>
          Delete News
        </Link>
      </Button>
    </div>
  );
};

export default Admin;
