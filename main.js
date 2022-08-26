const tweeterEngine = Tweeter();
const render = renderer();

$("#twit").on("click", function () {
  let txt = $(this).siblings("input").val();
  if (txt.length == 0) {
    alert("post is empty");
    return;
  }
  $(this).siblings("input").val("");
  tweeterEngine.addPost(txt);
  render.renderPosts(tweeterEngine.getPosts());
});

$("#posts").on("click", ".cmt", function () {
  console.log($(this).closest(".postAndComment"));
  let commentId = $(this).closest(".comment").data().id;
  let postId = $(this).closest(".postAndComment").children(".post").data().id;
  console.log(postId, commentId);
  tweeterEngine.removeComment(postId, commentId);
  render.renderPosts(tweeterEngine.getPosts());
});

$("#posts").on("click", ".pst", function () {
  let id = $(this).closest(".post").data().id;
  tweeterEngine.removePost(id);
  render.renderPosts(tweeterEngine.getPosts());
});

$("#posts").on("click", ".cmt-btn", function () {
  let txt = $(this).siblings(".cmt-input").val();
  if (txt.length == 0) {
    alert("comment is empty");
    return;
  }
  let postId = $(this).closest(".postAndComment").children(".post").data().id;
  tweeterEngine.addComment(postId, txt);
  render.renderPosts(tweeterEngine.getPosts());
});
