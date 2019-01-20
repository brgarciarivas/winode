import { connect } from 'react-redux';
import { get } from 'lodash';
import React, { Component } from 'react';

import { loadSubreddit } from '../../redux/actions/reddit';

const DEFAULT_SUBREDDIT = 'bitcoin';

class RedditWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: DEFAULT_SUBREDDIT,
    };
  }

  componentDidMount() {
    const { loadPosts } = this.props;
    const { search } = this.state;

    loadPosts(search);
  }

  handleSubredditChange = e => {
    this.setState({
      search: e.target.value,
    });
  }

  handleSearchSubmit = () => {
    const { loadPosts } = this.props;
    const { search } = this.state;

    loadPosts(search);
  }

  render() {
    const { selectedSubreddit } = this.props;
    const { search } = this.state;

    return (
      <div>
        <input value={search} onChange={this.handleSubredditChange} />
        <button onClick={this.handleSearchSubmit}>
          Search
        </button>
        Currently showing r/{selectedSubreddit}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedSubreddit: get(state, 'reddit.selectedSubreddit'),
    posts: get(state, 'reddit.posts'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts(subreddit) {
      return dispatch(loadSubreddit(subreddit));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditWidget);