import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Paper,
  makeStyles,
  Button,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "./NewsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "0.5%",
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1.5),
    textAlign: "left",
    color: theme.palette.text.secondary,
    backgroundColor: "#CAF1DE",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginBottom: "5%",
    marginTop: "1%",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [id, setId, newsData2, setNewsData2] = useContext(NewsContext);
  const handleClick = (data) => {
    setId((id) => [{ id: data }]);
  };

  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} spacing={2.5}>
        {newsData2.map((news, id) => {
          return (
            <Grid container item xs={12} sm={6} md={4} lg={4} key={id}>
              <Grid container>
                <Paper className={classes.paper}>
                  <Grid component={Card}>
                    <CardContent>
                      {" "}
                      <div style={{ textAlign: "left" }}>
                        {" "}
                        <Typography variant="h6" gutterBottom>
                          {news.title}
                        </Typography>
                        <Typography variant="h7" gutterBottom>
                          {news.publishedAt}
                        </Typography>
                      </div>
                      <CardMedia
                        className={classes.media}
                        image={news.urlToImage}
                      />
                      <div
                        style={{ textAlign: "justify" }}
                        //   className={classes.common}
                      >
                        <Typography variant="h7" gutterBottom>
                          By {news.author}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {news.description}
                        </Typography>
                      </div>
                      <Button
                        onClick={() => {
                          handleClick(id);
                        }}
                      >
                        <Link to="/fullnews">LEARN MORE</Link>
                      </Button>
                    </CardContent>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default HomePage;
