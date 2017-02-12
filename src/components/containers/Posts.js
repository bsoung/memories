import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import { CreatePost } from '../view';

class Posts extends Component {

	componentDidMount() {
		this.props.fetchPosts(null);
	}

	componentDidUpdate() {
		if (this.props.posts.list == null) {
			this.props.fetchPosts(null);
		}
	}

	submitPost(post) {
		const currentLocation = this.props.posts.currentLocation;

		// latitude, longitude - mongo requirement for geospatial queries
		post['geo'] = [
			currentLocation.lat,
			currentLocation.lng
		];

		console.log('submit post', JSON.stringify(post));
	}

	render() {
		const list = this.props.posts.list; // can be null

		return (
			<div>
				<CreatePost onCreate={this.submitPost.bind(this)} />

				<ol>
					{
						(list == null) 
						? null 
						: list.map(p => {
							return (
								<li key={p.id}>{p.caption}</li>
							)
						})
					}
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