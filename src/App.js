import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Post} from './components/post';
import {PostList} from './components/post-list';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[]
    }
  }

  addPost(post){
    this.setState({
      posts:[...this.state.posts,post]
    });
  }

  removePost(id){
    this.setState({
      posts:[]
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <PostList list={this.state.posts} handleRemovePost={this.removePost.bind(this)} />
          <Post handleAddPost={this.addPost.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
