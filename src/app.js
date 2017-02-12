import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Posts } from './components/containers'; 

class App extends Component {
	render() {
		return (
			<div>
				React entry point
				<Posts />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));