import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class CreatePost extends Component {

	render() {
		return (
			<div>
				Create Post
				<Dropzone />
			</div>
		)
	}
}


export default CreatePost;