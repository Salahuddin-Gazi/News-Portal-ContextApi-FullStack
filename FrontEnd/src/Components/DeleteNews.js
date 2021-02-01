import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class DeleteNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: "",
      response: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleId = this.handleId.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.id);
    axios
      .delete(`http://localhost:5000/routes/delNews/${this.state.id}`)
      .then((res) => {
        this.setState((prev) => ({
          ...prev,
          response: res.data,
        }));
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.response);
  }
  handleId(e) {
    e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      id: e.target.value,
    }));
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/routes/news")
      .then((res) => {
        // console.log(res);
        this.setState((prev) => ({
          ...prev,
          data: res.data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    // const p = {...this.state.data};
    // console.log(this.state.data);

    return (
      <div
        style={{
          textAlign: "left",
          margin: 10,
          padding: 2,
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            borderWidth: "1.5px",
            borderStyle: "solid",
            margin: 10,
            // padding: 5,
            // width: "65%",
          }}
          // className="container"
        >
          <form
            style={{
              margin: 10,
              padding: 5,
              // width: "65%",
            }}
          >
            <h3>Current News</h3>
            {this.state.data.map((news, id) => {
              return (
                <span key={id}>
                  Title: {news.title}
                  <br></br>
                  ID: {news._id}
                  <br></br>
                  <br></br>
                </span>
              );
            })}
          </form>
        </div>
        <div
          style={{
            margin: 10,
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <label
              style={{
                marginBottom: 5,
              }}
            >
              Type News ID to Delete
            </label>
            <br />
            <input
              type="text"
              placeholder="ex:60161db574581c1e10f0c2b9"
              style={{
                marginBottom: 5,
              }}
              name="id"
              value={this.state.id}
              onChange={this.handleId}
            />
            <br />
            <input
              type="submit"
              style={{
                marginBottom: 5,
              }}
            />
            <br />
            <Delete data={this.state.response} />

            <Link to="/admin">
              {" "}
              <img src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png" />{" "}
              Back To Admin
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default DeleteNews;

const Delete = (delNews) => {
  const { data } = delNews;
  // console.log(data);
  if (data !== null) {
    return (
      <div>
        <h3>Deleted News</h3>
        <p>
          {data.title}
          <br />
          {data._id}
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};
