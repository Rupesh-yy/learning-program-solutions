import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  state = {
    posts: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => this.setState({ posts: data, loading: false }))
      .catch(() => this.setState({ error: true, loading: false }));
  };

  render() {
    const { posts, loading, error } = this.state;

    if (loading) return <p>Loading blog posts...</p>;
    if (error) return <p style={{ color: "red" }}>Failed to load posts.</p>;

    return (
      <div>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
