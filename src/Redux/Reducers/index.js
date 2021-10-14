import { combineReducers } from "redux";
import LocationInfo from "./LocationInfo";

export const reducers = combineReducers({
	location: LocationInfo
})