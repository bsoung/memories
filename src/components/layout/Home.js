import React from 'react';
import { Posts, MapNavigation, Account } from '../containers';


export default (props) => {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<MapNavigation />
					</div>

					<div className="col-md-6">
						<Posts />
					</div>

					<div className="col-md-3">
						<Account />
					</div>

				</div>
			
			</div>
		);
}