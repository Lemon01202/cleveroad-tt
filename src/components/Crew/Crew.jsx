import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { setCrewInfo } from '../../Redux/Actions/LocationAction'
import './Crew.css'
const Crew = () => {
	const { people, crewCount } = useSelector(state => state.location)
	const [crewOutOfISS, setcrewOutOfISS] = useState(0);
	const dispatch = useDispatch();
	if (!people) return <Loader
		type="ThreeDots"
		color="#00BFFF"
		height={100}
		width={100}
		timeout={3000} //3 secs
	/>
	return (
		<div className='crewList'>
			{people.map(p => {
				if (p.craft !== 'ISS') {
					setcrewOutOfISS(crewOutOfISS + 1)
					return false;
				}
				return (
					<div className='crew'>
						{p.name}
					</div>
				)
			})}
			<div>Crew count: {crewCount - crewOutOfISS}</div>
		</div>
	)
}

export default Crew
