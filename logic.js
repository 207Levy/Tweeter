const Tweeter = function () {
  const _data = [];

  const addPost = function (str) {
    let newId;
    if (_data.length == 0) {
      newId = "p1";
    } else {
      let num = parseInt(_data[_data.length - 1].id.substring(1)) + 1;
      newId = "p" + num;
    }
    post = {
      text: str,
      id: newId,
      comments: [],
    };
    _data.push(post);
  };

  const removePost = function (postID) {
    for (let i = 0; i < _data.length; i++) {
      if (_data[i].id === postID) {
        _data.splice(i, 1);
        return;
      }
    }
  };

  const getPosts = () => _data;

  const addComment = function (id, txt) {
    let newCommentId;
    for (let i = 0; i < _data.length; i++) {
      if (_data[i].id === id) {
        if (_data[i].comments.length === 0) {
          newCommentId = "c1";
        } else {
          let num =
            parseInt(
              _data[i].comments[_data[i].comments.length - 1].id.substring(1)
            ) + 1;
          newCommentId = "c" + num;
        }
        comment = {
          id: newCommentId,
          text: txt,
        };
        _data[i].comments.push(comment);
        return;
      }
    }
  };

  const removeComment = function (postId, commentId) {
    for (let i = 0; i < _data.length; i++) {
      if (_data[i].id === postId) {
        let post = _data[i];
        for (let j = 0; j < post.comments.length; j++) {
          if (post.comments[j].id === commentId) {
            post.comments.splice(j, 1);
            return;
          }
        }
      }
    }
  };

  return {
    addPost,
    removePost,
    getPosts,
    addComment,
    removeComment,
  };
};

const tweeter = Tweeter();


console.log(tweeter.getPosts());
//Make sure your new post was added
