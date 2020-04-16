import React, { Component } from "react";
import Posts from './Posts/Posts';

import "./Blog.css";


class Blog extends Component {




  render() {


    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/new-post">New Post</a></li>
              </ul>
            </ul>
          </nav>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
