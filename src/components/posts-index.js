import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>List of blog posts</div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostIndex)