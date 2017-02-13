import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import { APIManager } from '../../utils';

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
		// console.log('Submit post', JSON.stringify(this.state.post));

		if (this.state.post.image.length == 0) {
			alert('Please add an image!');

			return;
		}

		if (this.state.post.caption.length == 0) {
			alert('Please add a caption!');

			return;
		}

		let updated = Object.assign({}, this.state.post);
		this.props.onCreate(updated);
	}

	imageSelected(files) {
		console.log('imageSelected');
		const image = files[0];

		// configure cloudinary api
		const cloudName = 'dfi9gljeu';
		const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

		const timestamp = Date.now() / 1000; // seconds
		const uploadPreset = 'teyrkikx';

		const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + '0aZqBldz5shUbPqVrRajBoDJIzc';
		console.log(paramsStr);

		const signature = sha1(paramsStr);
		const params = {
			'api_key': '269455271974196',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		}

		// upload file
		APIManager.uploadFile(url, image, params)
			.then(uploaded => {
				console.log('uploaded', JSON.stringify(uploaded));
				let updated = Object.assign({}, this.state.post);
				updated['image'] = uploaded['secure_url'];

				this.setState({
					post: updated
				});
			})
			.catch(err => {
				console.error(err);
			});
		
	}

	render() {
		return (
			<div>
				<strong>Create Post</strong>

				<Dropzone onDrop={this.imageSelected.bind(this)} style={{border: 'none'}}>
					<button>Upload Image</button>
				</Dropzone>

				<input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
				<button onClick={this.submitPost.bind(this)}>Submit</button>
			</div>
		)
	}
}


export default CreatePost;