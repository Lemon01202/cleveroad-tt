import React from 'react'
import { useSelector } from 'react-redux'
import './Location.css'
const Location = () => {
	const location = useSelector(state => state.location.location)
	if (!location) return <div>Loading...</div>
	return (
		<div className='location'>
			<div className='locationTitle'>IIS is now located at:</div>
			<div className='locationSubtitle'>longitude: {location.iss_position.longitude}, latitude: {location.iss_position.latitude}</div>
		</div>
	)
}

export default Location
