import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import { CreatePost } from '../view';

class Posts extends Component {

	componentDidMount() {
		this.props.fetchPosts(null);
	}

	render() {
		const list = this.props.posts.list.map(p => {
			return (
				<li key={p.id}>{p.caption}</li>
			)
		});

		return (
			<div>
				<CreatePost />

				Posts
				<ol>
					{ list }
				</ol>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {

	return {
		posts: state.post
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {
		fetchPosts: (params) => dispatch(actions.fetchPosts(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);