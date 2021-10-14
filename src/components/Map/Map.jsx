import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import './Map.css'
const Map = () => {
	const { lng, lat } = useSelector(state => state.location)
	if (lng === 0 && lat === 0) return <Loader
		type="ThreeDots"
		color="#00BFFF"
		height={100}
		width={100}
		timeout={3000}
	/>
	let cords = { lat: +lat, lng: +lng }
	const MapWithAMarker = withScriptjs(withGoogleMap(props =>
		<GoogleMap
			defaultZoom={3}
			defaultCenter={cords}
		>
			<Marker
				position={cords}
			/>
		</GoogleMap>
	));
	const API_KEY = 'AIzaSyDkbGOwXQsuR37bKKZJLR7NjJMorsM_oos';
	return (
		<div className="map">
			<MapWithAMarker
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}

export default Map
