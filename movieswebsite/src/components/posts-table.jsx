import React from "react";
const PostsTable = ({
  paginatedposts,
  handleDeleteButton,
  handleUpdateInput1,
  handleUpdateFinale,
  handleTotalUpdate
  
}) => {
  return (
    <div>
      <table class="table ">
        <thead>
          <tr class="bg-danger">
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedposts.map(post => (
            <tr key={post.id}>
              <th class="border bg-dark text-light">{post.id}</th>
              <th class="border bg-dark text-light">{post.title}</th>
              <th class="border bg-dark text-light">{post.body}</th>
              <th>
                <button
                  onClick={() => handleUpdateFinale(post)}
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Update
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form onSubmit={handleTotalUpdate}>
                          <div className="form-group">
                            <label htmlfor="exampleInputPassword1">id</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="id"
                              onChange={handleUpdateInput1}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlfor="exampleInputPassword1">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="title"
                              onChange={handleUpdateInput1}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlfor="exampleInputPassword1">Body</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              name="body"
                              onChange={handleUpdateInput1}
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
              </th>
              <th>
                <button
                  class="btn btn-secondary"
                  onClick={() => handleDeleteButton(post)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
