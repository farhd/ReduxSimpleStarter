import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    const { post } = this.props;

    if (!post) return <div>Loading...</div>;

    return (
      <div>
        <Link to="/">Back</Link>
        <button className="btn btn-danger float-right"
          onClick={this.onDeleteClick.bind(this)}>Delete</button>
        <h3>{post.title}</h3>  
        <strong>Categories: {post.categories}</strong>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
