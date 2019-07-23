import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {Button} from 'semantic-ui-react'

class AlbumList extends React.Component {
    state = {
    error: null,
    isLoaded: false,
    items: []
  };


  componentDidMount() {
    const {match: {
        params
      }} = this.props
    axios.get(`https://jsonplaceholder.typicode.com/albums?userID=${params.userId}`).then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
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
            <Button inverted color='green'>Home</Button>
          </Link>
          <br></br>
          <br></br>
          <br></br>
          {items.map(album => (
            <li key={album.id}>
              ID : {album.id}
              <br></br>
              Title : {album.title}
              <br></br>
              <br></br>
              <Link to={`/album/photo/${album.id}`}>
                <Button inverted color='green'>Photo</Button>
              </Link>
              <br></br>
              <br></br>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default AlbumList