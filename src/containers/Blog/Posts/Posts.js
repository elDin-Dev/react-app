import React, { Component } from 'react';
import axios from "../../../axios";
import Post from '../../../components/Post/Post';
import './Posts.css';

export class Posts extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    console.log("[Post] DidMount.INIT");
    axios.get("/posts").then(response => {
      console.log(response);
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: `Alex5`
        }
      });
      this.setState({ posts: updatedPosts });
      //console.log(updatedPosts);
    })
      .catch(error => {
        console.log('EEEEEeeerr'+error);
        //this.setState({ error: true });
      });

      console.log("[Post] DidMount.END");
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  }


  render() {

    let posts = <p style={{ textAlign: 'center' }}>Something was wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)} />;
      });

    }

    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts;