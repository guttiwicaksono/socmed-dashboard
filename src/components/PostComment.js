import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {Button} from 'semantic-ui-react'

class PostList extends React.Component {
    state = {
    error: null,
    isLoaded: false,
    items: []
  };


  componentDidMount() {
    const {match: {
        params
      }} = this.props
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`).then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <ul>
          <Link to={`/`}>
            <Button>User</Button>
          </Link>
          <br></br>
          <br></br>
          {items.map(comment => (
            <li key={comment.id}>
              <br></br>
              ID : {comment.id}
              <br></br>
              Name: {comment.name}
              <br></br>
              Email : {comment.email}
              <br></br>
              Body : {comment.body}
              <br></br>
              <br></br>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default PostList