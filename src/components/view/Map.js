import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class Map extends Component {

	render() {
		const mapContainer = <div style={{minHeight: 800, height: '100%', width: '100%'}}></div>

		return (
			<GoogleMapLoader 
				containerElement = { mapContainer }
				googleMapElement = { 
					<GoogleMap
						defaultZoom={this.props.zoom}
						defaultCenter={this.props.center}
						options={{streetViewControl: false, mapTypeControl: false}}>
					</GoogleMap>
				}
			/>
		)
	}
}


export default Map;