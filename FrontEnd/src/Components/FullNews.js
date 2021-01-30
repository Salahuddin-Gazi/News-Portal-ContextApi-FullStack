import {
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
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

const FullNews = () => {
  const classes = useStyles();
  const [id, setId, newsData2, setNewsData2] = useContext(NewsContext);
  var i = id[0].id;
  var data = newsData2[i];

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={10} md={9} lg={8} className={classes.card}>
          <Paper className={classes.paper}>
            <Grid component={Card}>
              <CardContent>
                <div style={{ textAlign: "left" }}>
                  {" "}
                  <Typography variant="h4" gutterBottom>
                    {data.title}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {data.publishedAt}
                  </Typography>
                </div>
                <CardMedia className={classes.media} image={data.urlToImage} />
                <div
                  style={{ textAlign: "justify" }}
                  //   className={classes.common}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    By {data.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="textSecondary"
                    variant="h6"
                  >
                    {data.description}
                    <br></br>
                    <br></br>
                    {data.content}
                  </Typography>
                </div>
              </CardContent>
              <Button
                onClick={() => {
                  window.history.back();
                }}
              >
                <img src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png" />
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default FullNews;
