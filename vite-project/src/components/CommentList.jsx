import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  return (
    <ListGroup>
        {props.comments.map((review) => {
            return(
            <ListGroup.Item key={review._id}>
                {review.comment} : {review.rate}/5
            </ListGroup.Item>)
        })
    }
            </ListGroup>
  )} 
export default CommentList;
    