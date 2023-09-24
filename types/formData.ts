export interface FormData {
	[key: string]: DestinationData;
}

export interface DestinationData {
	city?: string;
	country?: string;
	startDate?: string;
	endDate?: string;
	duration?: string;
	activies?: string[];
	food?: string[];
	accomodation?: string[];
	travelers?: UserData[];
}

export interface UserData {
	firstName: string;
	lastName: string;
	email: string;
}
