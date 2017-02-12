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
		console.log('componentDidUpdate');
	}

	render() {
		const list = this.props.posts.list; // can be null

		return (
			<div>
				<CreatePost />

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