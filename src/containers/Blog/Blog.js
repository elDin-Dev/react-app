import React, { Component } from "react";
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom'
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import "./Blog.css";

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');

});




class Blog extends Component {

  state={
    auth:true,
  }

  render() {

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <ul>
                <li><NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}
                >Posts</NavLink></li>
                <li><NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }} >New Post</NavLink></li>
              </ul>
            </ul>
          </nav>
        </header>
        {/*
          <Route path="/" exact render={ () => <h1>Home</h1>  }/>
          <Route path="/"  render={ () => <h1>Home 2</h1>  }/>
         */}
        
        
        <Switch>          
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> :null}
          <Route path="/posts"  component={Posts} />
          <Route render={() => <h1>Nout found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/*<Route path="/"  component={Posts} />*/}
       </Switch>

      </div>
    );
  }
}

export default Blog;

