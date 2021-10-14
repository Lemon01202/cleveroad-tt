import React from 'react'
import { locationAPI } from '../../api/api'
import { setCrewInfo, setLatitude, setLocation, setLongitude, setTimestemp } from '../Actions/LocationAction'
import { LoactionTypes } from '../Types/LocationTypes'

const initialState = {
	location: null,
	lng: 0,
	lat: 0,
	currentDate: null,
	timestamp: null,
	crewCount: null,
	people: null
}

const LocationInfo = (state = initialState, action) => {
	switch (action.type) {
		case LoactionTypes.SET_LOCATION:
			return {
				...state,
				location: action.payload
			}
		case LoactionTypes.SET_LATITUDE:
			return {
				...state,
				lat: action.payload
			}
		case LoactionTypes.SET_LONGITUDE:
			return {
				...state,
				lng: action.payload
			}
		case LoactionTypes.SET_LONGITUDE:
			return {
				...state,
				currentDate: action.payload
			}
		case LoactionTypes.SET_TIMESTAMP:
			return {
				...state,
				timestamp: action.payload
			}
		case LoactionTypes.SET_CREW_INFO:
			debugger;
			return {
				...state,
				crewCount: action.crewCount,
				people: action.people
			}
		default:
			return state
	}
}

export default LocationInfo


export const setLocationData = () => {
	return async (dispatch) => {
		let data = await locationAPI.getLocation();
		dispatch(setLocation(data))
		dispatch(setLatitude(data.iss_position.latitude))
		dispatch(setLongitude(data.iss_position.longitude))
		dispatch(setTimestemp(data.timestamp))
	}
}

export const setCrewData = () => {
	return async (dispatch) => {
		let data = await locationAPI.getCrew();
		let { number, people } = data;
		dispatch(setCrewInfo(number, people))
	}
}