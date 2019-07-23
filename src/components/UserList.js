import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {Button} from 'semantic-ui-react'

class UserList extends React.Component {
    state = {
    error: null,
    isLoaded: false,
    items: []
  };

  handleClick = event => {
   	this.setState({ 
   		id: event.target.name 
   	});
   	console.log(event.target.name);
	};

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
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
          {items.map(item => (
            <li key={item.username}>
              Username : {item.username} 
              <br></br>
              Name : {item.name}
              <br></br>
              <div className='ui two buttons'>
                <Link to={`/users/album/${item.id}`}>
                  <Button inverted color='green'>Albums</Button>
                </Link>
                <Link to={`/users/post/${item.id}`}>
                  <Button inverted fluid color='blue'>Posts</Button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default UserList