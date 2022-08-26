function renderer() {
  function addCommentBar() {
    const input = $(
      `<input type="text" placeholder="comment here..." class="cmt-input" />`
    );
    const searchBtn = $(`<button class="cmt-btn">Comment</button>`);

    let commentBar = $(`<div id="comment-bar"></div>`);
    commentBar.append(input);
    commentBar.append(searchBtn);

    return commentBar;
  }

  function renderPosts(posts) {
    $("#posts").empty();

    for (let post of posts) {
      const deletePostDiv = $(`<div class="delete pst">X</div>`);
      const postAndCommentDiv = $('<div class="postAndComment"></div>');
      const postDiv = $(
        `<div class="post" data-id="${post.id}">${post.text}</div>`
      );
      postDiv.append(deletePostDiv);
      let commentsDiv = $(`<div class="c"><p>Comments:</p></div>`);

      for (comment of post.comments) {
        const deleteCommentDiv = $(`<div class="delete cmt">X</div>`);
        let commentDiv = $(
          `<div class="comment" data-id="${comment.id}">${comment.text}</div>`
        );
        commentDiv.append(deleteCommentDiv);
        commentsDiv.append(commentDiv);
      }
      commentsDiv.append(addCommentBar);
      postAndCommentDiv.append(postDiv);
      postAndCommentDiv.append(commentsDiv);
      $("#posts").append(postAndCommentDiv);
    }
  }
  return { renderPosts };
}
