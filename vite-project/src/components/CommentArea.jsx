import { Form } from 'react-bootstrap'
function CommentArea(props) {
  const URL="https://striveschool-api.herokuapp.com/api/comments/"

    console.log("ASIN",URL + props.id)
    function fetchComments () {
            fetch(URL + props.id, {
                    headers: {
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMjE4ZjIzZTc0MDAwMTVmN2ZkZGYiLCJpYXQiOjE3NjM2NDc4ODcsImV4cCI6MTc2NDg1NzQ4N30.bUKzmEZrP_XuInVZkHwAnbFFrLLQdMQ-Na7FLIh6oYo"
                    }
                })  
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error("Network response was not ok" + response.statusText)
                    }   
                })
                .then(data => {console.log(data)
                    data.forEach(review => {
                        console.log(review.comment)   
                    })
                }
                )
                .catch(error => console.error("Error fetching comments:", error))
            }
            fetchComments()
            console.log("Comment Area Loaded")
            randomId = Math.floor(Math.random() * 1000000000)
    return (    
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>COMMENTO</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
    )
}
export default CommentArea