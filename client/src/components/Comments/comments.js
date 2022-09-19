import { Container, Row } from "react-bootstrap";
import Comment from "../Comment/comment.js";
import "./comments.css";

export default function Comments( {comments} ) {

  return (
    <div className="comments">
    <Container>
    <Row>
    <h3 className="h3head">
        Comments...<hr></hr>
    </h3>
      {Array.isArray(comments) && 
      comments.map((p) => (
        <Comment comment={p} />
      ))}
      </Row>
      </Container>
    </div>
  );
}
