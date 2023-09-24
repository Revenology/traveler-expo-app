import { createContext } from 'react';

export interface MapDate {
	city?: string;
	country?: string;
	duration?: string;
	startDate?: string;
	endDate?: string;
}

export interface MapDateState {
	mapDate: MapDate;
	setMapDate: React.Dispatch<React.SetStateAction<MapDate>>;
}

const mapDateInitial = {} as MapDateState;

export const MapDateContext = createContext(mapDateInitial);
