export interface FormData {
	[key: string]: DestinationData;
}

export interface DestinationData {
	city?: string;
	country?: string;
	startDate?: string;
	endDate?: string;
	duration?: string;
	activities?: string[];
	cuisine?: string[];
	accommodation?: string[];
	travelers?: UserData[];
}

export interface UserData {
	firstName: string;
	lastName: string;
	email: string;
}

export interface JourneyResponse {
	//Location props
	address: string;
	city: string;
	country: string;
	date: string;

	//Activity Parameters
	timeRequiredInHours: string;
	activityName: string;
	description: string;
}

export interface AccommodationResponse {
	name: string;
	address: string;
	city: string;
	country: string;
	startDate: string;
	endDate: string;
	amenities: string;
}

export interface TravelerJson {
	//key is the accommodation and location
	[key: string]: {
		accommodation: AccommodationResponse[];
		activities: JourneyResponse[];
	};
}
