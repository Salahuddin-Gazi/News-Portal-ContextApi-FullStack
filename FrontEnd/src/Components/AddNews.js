import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        author: "",
        title: "",
        description: "",
        urlToImage: "",
        publishedAt: "",
        content: "",
      },
      data: {
        _id: "",
        author: "",
        title: "",
        description: "",
        urlToImage: "",
        publishedAt: "",
        content: "",
        error: null,
      },
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handlePublishedAt = this.handlePublishedAt.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitle(event) {
    this.setState((prev) => ({
      form: {
        ...prev.form,
        title: event.target.value,
      },
      data: {
        ...prev.data,
      },
    }));
  }
  handlePublishedAt(event) {
    this.setState((prev) => ({
      form: {
        ...prev.form,
        publishedAt: event.target.value,
      },
      data: {
        ...prev.data,
      },
    }));
  }
  handleImage(event) {
    this.setState((prev) => ({
      form: {
        ...prev.form,
        urlToImage: event.target.value,
      },
      data: {
        ...prev.data,
      },
    }));
  }
  handleAuthor(event) {
    this.setState((prev) => ({
      form: {
        ...prev.form,
        author: event.target.value,
      },
      data: {
        ...prev.data,
      },
    }));
  }
  handleContent(event) {
    this.setState((prev) => ({
      form: {
        ...prev.form,
        content: event.target.value,
      },
      data: {
        ...prev.data,
      },
    }));
  }
  handleDescription(event) {
    this.setState((prev) => ({
      form: {
        ...prev.form,
        description: event.target.value,
      },
      data: {
        ...prev.data,
      },
    }));
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/routes/newNews", this.state.form)
      .then((res) => {
        this.setState((prev) => ({
          form: {
            ...prev.form,
          },
          data: {
            ...prev.data,
            _id: res.data._id,
            author: res.data.author,
            title: res.data.title,
            description: res.data.description,
            // urlToImage: res.data.urlToImage,
            publishedAt: res.data.publishedAt,
            content: res.data.content,
            error: res.data,
          },
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ textAlign: "left", margin: 10, padding: 2 }}>
        <h3>Add Your News, Below</h3>

        <div
          style={{
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
              padding: 2,
              width: "65%",
            }}
            // className="container"
          >
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Title: </label>
                <br></br>
                <input
                  type="text"
                  name="title"
                  // placeholder="Title"
                  value={this.state.form.title}
                  onChange={this.handleTitle}
                />
              </div>

              <div>
                <label>Published At: </label>
                <br></br>
                <input
                  type="text"
                  name="publishedAt"
                  // placeholder="Published At"
                  value={this.state.form.publishedAt}
                  onChange={this.handlePublishedAt}
                />
              </div>

              <div>
                {" "}
                <label>Image-URL: </label>
                <br></br>
                <input
                  type="url"
                  name="image"
                  // placeholder="Image-URL"
                  value={this.state.form.urlToImage}
                  onChange={this.handleImage}
                />
              </div>

              <div>
                <label>Author: </label>
                <br></br>
                <input
                  type="text"
                  name="author"
                  // placeholder="Author"
                  value={this.state.form.author}
                  onChange={this.handleAuthor}
                />
              </div>

              <div>
                <label>Content: </label>
                <br></br>
                <input
                  type="text"
                  name="content"
                  // placeholder="Content"
                  value={this.state.form.content}
                  onChange={this.handleContent}
                />
              </div>

              <div>
                <label>Description: </label>
                <br></br>
                <input
                  type="text"
                  name="description"
                  // placeholder="Description"
                  value={this.state.form.description}
                  onChange={this.handleDescription}
                />
              </div>
              <br></br>
              <button type="submit">Submit</button>
              <br></br>
              <br></br>
            </form>
          </div>
          <div
            style={{
              width: "35%",
              borderWidth: "1.5px",
              borderStyle: "solid",
              margin: 10,
              padding: 2,
            }}
            className="container"
          >
            <form>
              <p>_id: {this.state.data._id}</p>
              <p>title: {this.state.data.title}</p>
              <p>author: {this.state.data.author}</p>
              <p>publishedAt: {this.state.data.publishedAt}</p>
              <p>content: {this.state.data.content}</p>
              <p>description: {this.state.data.description}</p>
              <Lol {...this.state.data} />
            </form>
          </div>
        </div>
        <Link to="/admin">
          {" "}
          <img src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png" />{" "}
          Back To Admin
        </Link>
      </div>
    );
  }
}

const Lol = (data) => {
  const { error } = data;
  // console.log(error);
  if (typeof error !== "object" && error !== null) {
    return (
      <div
        style={{
          textDecoration: "underline",
          fontWeight: "bold",
          color: "red",
        }}
      >
        <p>error: {error}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AddNews;
