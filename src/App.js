import React, { Component } from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import PostComment from './components/PostComment';
import AlbumList from './components/AlbumList';
import AlbumPhoto from './components/AlbumPhoto';
import { Grid } from 'semantic-ui-react';
import {BrowserRouter as Router,
        Route} from 'react-router-dom'



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Grid centered columns={1}>
          <Grid.Column className='paddingBottom'>
          </Grid.Column>
          </Grid>
          <Route exact path='/' component={UserList}/>
          <Route exact path='/users/post/:userId' component={PostList} />
          <Route exact path='/post/comment/:postId' component={PostComment} />
          <Route exact path='/users/album/:userId' component={AlbumList} />
          <Route exact path='/album/photo/:albumId' component={AlbumPhoto} />
        </div>
     </Router>
    );
  }
}
export default App;
