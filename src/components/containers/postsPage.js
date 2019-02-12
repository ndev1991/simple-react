import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators}  from 'redux';
import * as actions from '../../actions/postsActions';

import PostCard from '../PostCard';

export class PostsPage extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.actions.fetchPosts();
  }

  render() {
    const { filteredPosts } = this.props.posts;

    return (
      <div>
        {filteredPosts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    );
  }
}

PostsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPage);
