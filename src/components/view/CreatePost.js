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
			<div style={{background: '#fff'}}>
				<h2>Submit Memory</h2>

				<input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />


				<div className="row">
					<div className="3u 12u$(small)">
						<Dropzone onDrop={this.imageSelected.bind(this)} style={{border: 'none', marginTop: 12}}>
							<button className="button special small">Add Image</button>
						</Dropzone>
					</div>

					<div className="3u 12u$(small)">
						<button className="button special small" style={{marginTop: 12}} onClick={this.submitPost.bind(this)}>Submit</button>
					</div>

					<div className="6u 12u$(small)">
						<img style={{width: 120, float: 'right', marginTop: 12}} src={this.state.post.image} />
					</div>
				</div>

				<br />
				<hr />

			</div>
		)
	}
}


export default CreatePost;