import React from 'react';
import { Posts, MapNavigation, Account } from '../containers';

export default (props) => {
	return (
		<div>
			<header id="header" style={{padding: 0, border: "2px solid darkgray"}}>
				<div className="inner">
					<MapNavigation />
				</div>
			</header>

			<div id="main">
				<section id="one">
					<div className="row">
						<div className="9u 12u$(small)">
							<Posts />
						</div>

						<div className="3u 12u$(small)">
							<Account />
						</div>
						
					</div>
				</section>
				
			</div>

		</div>
	);
}

			