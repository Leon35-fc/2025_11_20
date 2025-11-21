import { Component } from 'react'
import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import CommentList from './CommentList.jsx'

const URL="https://striveschool-api.herokuapp.com/api/comments/"
const KEY="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMjE4ZjIzZTc0MDAwMTVmN2ZkZGYiLCJpYXQiOjE3NjM2NDc4ODcsImV4cCI6MTc2NDg1NzQ4N30.bUKzmEZrP_XuInVZkHwAnbFFrLLQdMQ-Na7FLIh6oYo"

class CommentArea extends Component {
    
    // {console.log('ASIN', URL + this.props.id)}

    state = {
        rewiev: []
    }
    
    fetchComments () {
            fetch(URL + this.props.id, {
                    headers: {
                    Authorization: KEY
                    }
                })  
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error("Network response was not ok" + response.statusText)
                    }   
                })
                .then(comments => {console.log(comments)
                    this.setState({rewiev: comments})
                }
                )
                .catch(error => console.error("Error fetching comments:", error))
            }

componentDidMount() {
    this.fetchComments()
}

    render() {  
        
    return (    
        <>     
            {/* <Form.Group key={this.props.id} className="mb-3" controlId={`comment-${this.props.id}`}>
                <Form.Label>COMMENTO</Form.Label>
                <Form.Control as="textarea" value={this.props.comments} rows={3} />
            </Form.Group> */}
            <h3>Reviews</h3>
            <CommentList comments={this.state.rewiev} />
        </>
    )
}
}
export default CommentArea