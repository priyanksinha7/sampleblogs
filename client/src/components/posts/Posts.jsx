import Post from "../post/Post";
import "./posts.css";

export default function Posts( {posts} ) {

  console.log(posts.length);
  return (
    <div className="posts">
      {Array.isArray(posts) && 
      posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
