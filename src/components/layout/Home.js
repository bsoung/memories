import React from 'react';
import { Posts } from '../containers';

export default (props) => {
		return (
			<div className="container">
				<h1>Home layout</h1>
				<div className="row">
					<div className="col-md-3">
						MAP
					</div>

					<div className="col-md-6">
						<Posts />
					</div>

					<div className="col-md-3">
						ACCOUNT
					</div>

				</div>
			
			</div>
		);
}