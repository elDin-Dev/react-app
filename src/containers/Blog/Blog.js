import React, { Component } from "react";
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom'
import "./Blog.css";
import NewPost from './NewPost/NewPost';


class Blog extends Component {

  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</Link></li>
              </ul>
            </ul>
          </nav>
        </header>
        {/*
          <Route path="/" exact render={ () => <h1>Home</h1>  }/>
          <Route path="/"  render={ () => <h1>Home 2</h1>  }/>
         */}

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
