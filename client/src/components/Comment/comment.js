import "./comment.css";


export default function Comment({ comment }) {
  return (
    <div className="cmnt">
      <div className="postInfo">
          <span className="cmntTitle">{comment.user}</span>
        <hr />
        <span className="cmntDate">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
      <p className="cmntDesc">{comment.comment}</p>
    </div>
  );
}
