import "./Posts.scss";

import { useSelector } from "react-redux";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Posts = () => {
  const { posts, auth } = useSelector((state) => state);

  return (
    <div className="posts">
    <div className="posts-inner">
      {posts.subject !== null && auth.user.status === "Admin" ? <PostForm subject={posts.subject}/> : null}
      {posts.posts &&
        posts.posts.map((post) => {
          return (
            <Post
              postId={post._id}
              postUserId={post.user}
              name={post.name}
              homework={post.homework}
              due={post.due}
              date={post.date}
              likes={post.likes}
              comments={post.comments}
              key={post._id}
              userId={auth.user._id}
              subject={post.subject}
              userStatus={auth.user.status}
            />
          );
        })}
        </div>
    </div>
  );
};

export default Posts;
