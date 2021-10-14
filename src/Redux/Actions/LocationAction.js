import { LoactionTypes } from "../Types/LocationTypes"

export const setLocation = (location) => {
	return {
		type: LoactionTypes.SET_LOCATION,
		payload: location
	}
}
export const setLatitude = (latitude) => {
	return {
		type: LoactionTypes.SET_LATITUDE,
		payload: latitude
	}
}
export const setLongitude = (longitude) => {
	return {
		type: LoactionTypes.SET_LONGITUDE,
		payload: longitude
	}
}
export const setCurrentDate = (date) => {
	return {
		type: LoactionTypes.SET_CURRENT_DATE,
		payload: date
	}
}
export const setTimestemp = (timestemp) => {
	return {
		type: LoactionTypes.SET_TIMESTAMP,
		payload: timestemp
	}
}
export const setCrewInfo = (crewCount, people) => {
	return {
		type: LoactionTypes.SET_CREW_INFO,
		crewCount,
		people
	}
}