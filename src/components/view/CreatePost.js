import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class CreatePost extends Component {
	constructor() {
		super();

		this.state = {
			post: {
				image: '',
				caption: ''
			}
		}
	}

	updatePost(e) {
		e.preventDefault();

		let updated = Object.assign({}, this.state.post);
		updated[e.target.id] = e.target.value;

		this.setState({
			post: updated
		})
	}

	submitPost(e) {
		e.preventDefault();
		console.log('Submit post', JSON.stringify(this.state.post));

		let updated = Object.assign({}, this.state.post);

		this.props.onCreate(updated);
	}

	render() {
		return (
			<div>
				Create Post

				<Dropzone style={{border: 'none'}}>
					<button>Upload Image</button>
				</Dropzone>

				<input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
				<button onClick={this.submitPost.bind(this)}>Submit</button>
			</div>
		)
	}
}


export default CreatePost;