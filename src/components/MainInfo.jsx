import React, { useEffect } from 'react'
import Crew from './Crew/Crew'
import CurrentTime from './CurrentTime/CurrentTime'
import Location from './Location/Location'
import Map from './Map/Map'
import './MainInfo.css'
import { useDispatch } from 'react-redux'
import { setCrewData, setLocationData } from '../Redux/Reducers/LocationInfo'
import { setCurrentDate } from '../Redux/Actions/LocationAction'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
const MainInfo = () => {
	const dispatch = useDispatch();
	const { location, people } = useSelector(state => state.location)
	useEffect(() => {
		const intervalId = setInterval(() => {
			dispatch(setLocationData());
			dispatch(setCrewData())
		}, 5000)
		return () => clearInterval(intervalId);
	}, [])

	if (!location | !people) {
		return <div className='loader'>
			<Loader
				type="ThreeDots"
				color="#00BFFF"
				height={200}
				width={300}
				timeout={3000}
			/>
		</div>
	}
	return (
		<div className='container top-20'>
			<div className='row'>
				<div className='col-sm-8'>
					<Location />
				</div>
				<div className='col-sm-4'>
					<CurrentTime />
				</div>
				<div className='col-sm-8'>
					<Map />
				</div>
				<div className='col-sm-4'>
					<Crew />
				</div>
			</div>
		</div>
	)
}

export default MainInfo
