import React, { Component } from 'react';
import logo from './logo.svg';
import Spinner from 'react-spinkit';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });

    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data => {
      this.setState({ posts: data,
        isLoading: false })
    }
   )
  }

  render() {
    const { posts, isLoading } = this.state;
    console.log(posts)
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <div className="App-main">
        <ul>
          { !isLoading ? (<Spinner name="ball-pulse-sync" />) :
            (posts.map(post =>  
            <li key={post.id}>
              {post.title}
            </li>)
            )
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
