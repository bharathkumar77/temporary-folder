import React, { Component } from "react";
import axios from "axios";
import PostsTable from "./posts-table";
import _ from "lodash";
import http from "../services/httpServices";

const baseUrl = "https://jsonplaceholder.typicode.com";

class Posts extends Component {
  state = {
    posts: [],
    tempPost: {
      id: "",
      title: "",
      body: ""
    },
    tempPost1: {
      id: "",
      title: "",
      body: ""
    },
    index: 0
  };
  handleUpdateInput = event => {
    const tempPost = this.state.tempPost;
    tempPost[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ tempPost });
    console.log(this.state.tempPost);
  };
  handleUpdateFinal = event => {
    event.preventDefault();
    const posts = [this.state.tempPost, ...this.state.posts];
    this.setState({ posts });
  };

  deletePost = post => {
    const posts = this.state.posts.filter(p => p.id !== post.id);
    try {
      axios.delete(baseUrl + "/posts" + post.id);
    } catch (err) {
      if (err.respomse && err.response.status == 404) {
        alert("This post has already been deleted");
      } else {
        alert("Unknown error");
      }
    }

    this.setState({ posts });
  };
  updatePost = async post => {
    post.title = "New Title";
    const response = await http.put(baseUrl + "/todos/" + post.id, post);
    console.log(response.data);
    const indx = this.state.posts.indexOf(post);
    const posts = this.state.posts;
    posts[indx] = response.data;
    this.setState({ posts });
  };

  handleUpdateInput1 = event => {
    const temf = this.state.tempPost1;
    temf[event.CurrentTarget.name] = event.CurrentTarget.value;
    this.setState({ tempPost1: temf });
  };
  handleTotalUpdate = () => {
    const posts = this.state.posts;
    const index = this.state.posts.indexOf(this.state.tempPost);
    posts[index] = this.state.tempPost1;
    this.setState({ posts });
  };
  handleUpdateFinale = post => {
    const dummy = this.state.posts.filter(p => post.id === p.id);
    this.setState({ tempPost: dummy });
  };

  async componentDidMount() {
    const promise = await http.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    this.setState({ posts: promise.data });
    console.log(this.state.posts);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.handleAddPost}
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          + Add Post
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleUpdateFinal}>
                  <div className="form-group">
                    <label htmlfor="exampleInputPassword1">id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="id"
                      onChange={this.handleUpdateInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="title"
                      onChange={this.handleUpdateInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Body</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="body"
                      onChange={this.handleUpdateInput}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-success">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <PostsTable
          paginatedposts={this.state.posts}
          handleDeleteButton={this.deletePost}
          handleUpdateFinale={this.handleUpdateFinale}
          handleUpdateInput1={this.handleUpdateInput1}
          handleTotalUpdate={this.handleTotalUpdate}
        />
      </div>
    );
  }
}

export default Posts;
