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
