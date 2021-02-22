import { useDispatch } from "react-redux";
import { removeComment } from "../../../redux/actions/posts";

import { VscTrash } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Comment = ({
  commentId,
  commentDate,
  commentText,
  commentName,
  commentUserId,
  userId,
  userStatus,
  subject,
  postId
}) => {
  const dispatch = useDispatch();

  return (
    <div className="comment" key={commentId}>
      <p className="text">
        <span>{commentName}</span> {commentText}
      </p>

      <div className="bottom-container">
        <p className="date">{commentDate}</p>{" "}
        {commentUserId === userId || userStatus === "Admin" || userStatus === "Instructor" ? (
          <div className="delete-comment" onClick={() => dispatch(removeComment(postId, commentId, subject))}>
            <IconContext.Provider value={{ className: "delete-icon" }}>
              <VscTrash />
            </IconContext.Provider>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Comment;
