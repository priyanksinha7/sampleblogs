import "./comment.css";
import { Link } from "react-router-dom";

export default function Comment({ comment }) {
  return (
    <div className="cmnt">
      <div className="postInfo">
    <Link to={`/?user=${comment.user}`} className="link"> <b> <span className="cmntTitle">{comment.user}</span></b> </Link>
        <hr />
        <span className="cmntDate">
          {new Date(comment.createdAt).toDateString()}
        </span>
      </div>
      <p className="cmntDesc">{comment.comment}</p>
    </div>
  );
}
