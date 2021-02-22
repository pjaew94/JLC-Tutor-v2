import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { addLike, removeLike, deletePost } from "../../../redux/actions/posts";

import { VscHeart, VscComment, VscTrash } from "react-icons/vsc";
import { IconContext } from "react-icons";

import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

const Post = ({
  postId,
  postUserId,
  name,
  userStatus,
  homework,
  due,
  date,
  likes,
  comments,
  userId,
  subject,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState(false);

  const dispatch = useDispatch();

  // Set liked if the user already liked this specific post
  useEffect(() => {
    likes &&
      likes.map((e) => {
        if (e.user === userId) {
          return setLike(true);
        }
        return like;
      });
  }, []);

  // Like the post logic.
  const likePost = () => {
    if (like === false) {
      setLike(true);
      dispatch(addLike(postId));
    } else {
      setLike(false);
      dispatch(removeLike(postId));
    }
  };

  return (
    <div className="post" key={postId}>
      <div className="content">
        <div className="left">
          <p className="homework">
            <span>Homework:</span> {homework}
          </p>
          <p className="due">
            <span>Due:</span> {due}
          </p>
        </div>
        <div className="right">
          <p className="author">{name}</p>
          <p className="date">{date}</p>
        </div>
      </div>

      <div className="likes-comment">
        <div className="buttons">
          <div className="left-buttons">
            <button className="like-button" onClick={() => likePost()}>
              <IconContext.Provider
                value={
                  like
                    ? { className: "liked" }
                    : { className: "icon like-icon" }
                }
              >
                <VscHeart />
              </IconContext.Provider>
            </button>
            <div className="likes-count">
              {likes.length === 0 ? 0 : likes.length}{" "}
              {likes.length === 1 ? "like" : "likes"}
            </div>
            <button
              className="comment-button"
              onClick={() => setShowComments(!showComments)}
            >
              <IconContext.Provider value={{ className: "icon comment-icon" }}>
                <VscComment />
              </IconContext.Provider>
            </button>
            {comments.length !== 0 && (
              <button
                className="view-comments"
                onClick={() => setShowComments(!showComments)}
              >
                {showComments ? "Hide all" : "View all"} {comments.length}{" "}
                comments
              </button>
            )}
          </div>
          <div className="right-buttons">
            {userId === postUserId || userStatus === "Admin" ? (
              <button
                className="delete-button"
                onClick={() => dispatch(deletePost(postId))}
              >
                <IconContext.Provider value={{ className: "icon" }}>
                  <VscTrash />
                </IconContext.Provider>
              </button>
            ) : null}
          </div>
        </div>
        {showComments && <CommentForm 
            postId={postId}
            subject={subject}
        />}
        {showComments &&
          comments.map((comment) => {
            return (
              <Comment
                postId={postId}
                subject={subject}
                commentId={comment._id}
                commentText={comment.text}
                commentName={comment.name}
                commentUserId={comment.user}
                userId={userId}
                userStatus={userStatus}
                commentDate={comment.date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Post;
