import React from 'react'
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import './CurrentTime.css'
const CurrentTime = () => {
	const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const { timestamp } = useSelector(state => state.location)
	if (!timestamp) return <Loader
		type="ThreeDots"
		color="#00BFFF"
		height={100}
		width={100}
		timeout={3000}
	/>
	const date = new Date(timestamp * 1000);
	return (
		<div className='currentTime'>
			<div className='currentTimeTitle'>Current UTC time: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
			<div className='currentTimeSubtitle'>{day[date.getDay()]}, {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}</div>
		</div>
	)
}
export default CurrentTime
