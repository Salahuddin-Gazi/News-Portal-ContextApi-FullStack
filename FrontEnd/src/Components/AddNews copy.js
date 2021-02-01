import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      description: "",
      urlToImage: "",
      publishedAt: "",
      content: "",
    };
    this.Data = "Hi";
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePublishedAt = this.handlePublishedAt.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  handlePublishedAt(event) {
    this.setState({
      publishedAt: event.target.value,
    });
  }
  handleImage(event) {
    this.setState({
      urlToImage: event.target.value,
    });
  }
  handleAuthor(event) {
    this.setState({
      author: event.target.value,
    });
  }
  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }
  handleDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/routes/newNews", this.state)
      .then((res) => {
        // console.log(res.data);
        this.setData = JSON.stringify(res.data);
        // this.data = JSON.stringify(res.data);
        // console.log(this.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.Data);
    // console.log(newsData);
    return (
      <div className="container">
        <h3>Add Your News, Below</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br></br>
            <input
              type="text"
              name="title"
              // placeholder="Title"
              value={this.state.title}
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
              value={this.state.publishedAt}
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
              value={this.state.image}
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
              value={this.state.author}
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
              value={this.state.content}
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
              value={this.state.description}
              onChange={this.handleDescription}
            />
          </div>
          <br></br>
          <button type="submit">Submit</button>
          <br></br>
          <br></br>
          <Link to="/admin">
            {" "}
            <img src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png" />{" "}
            Back To Admin
          </Link>
        </form>
        <form className="container">
          <textarea>{this.Data}</textarea>
        </form>
      </div>
    );
  }
}
export default AddNews;
