import React from 'react';
import Posts from './components/Posts';
import Nav from './components/Nav';
import PostsList from './components/PostsList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <PostsList />
      </div>
    );
  }
}
