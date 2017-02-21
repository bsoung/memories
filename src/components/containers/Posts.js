import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import { CreatePost } from '../view';

class Posts extends Component {

	componentDidMount() {
		const currentLocation = this.props.posts.currentLocation;

		this.props.fetchPosts(currentLocation);
	}

	componentDidUpdate() {
		if (this.props.posts.list == null) {
			const currentLocation = this.props.posts.currentLocation;

			this.props.fetchPosts(currentLocation);
		}
	}

	submitPost(post) {
		const user = this.props.account.user;

		if (user == null) {
			alert('Please sign up or log in to submit post!');
			return;
		}

		post.profile = {
			id: user.id,
			username: user.username
		}

		const currentLocation = this.props.posts.currentLocation;

		// latitude, longitude - mongo requirement for geospatial queries
		post.geo = [
			currentLocation.lat,
			currentLocation.lng
		];

		this.props.createPost(post);
	}

	render() {
		const list = this.props.posts.list; // can be null
		const user = this.props.account.user;

		return (
			<div>
				{
					(user == null) 
					? <div style={{marginBottom: 30}}>Please log in to post image</div>
					:  <CreatePost onCreate={this.submitPost.bind(this)} />
				}
				

				<div className="table-wrapper">
					<table className="alt">
						<tbody>
							{
								(list == null) 
								? null 
								: list.map(p => {
									return (

										<tr key={p.id}>
												<td><a target="_blank" href={p.image} className="image"><img style={{width: 100}} src={p.image} /></a></td>
												<td>{p.caption}</td>
												<td>{p.profile.username}</td>
										</tr>

									)
								})
							}
						</tbody>
					</table>
				</div>
				
			</div>
		)
	}
}

/*
							<article class="6u 12u$(xsmall) work-item">
								<a href="images/fulls/01.jpg" class="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
 */

const mapStateToProps = (state) => {

	return {
		posts: state.post,
		account: state.account
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {
		fetchPosts: (params) => dispatch(actions.fetchPosts(params)),
		createPost: (params) => dispatch(actions.createPost(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);