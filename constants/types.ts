export interface UserDataProps {
    username: string;
    firstName: string;
    lastName: string;
    dob: Date;
    email: string;
    password: string;
    phone: number | null;
}

export interface AccountProps extends UserDataProps {
    id: number;
    preferences?: string;
    startData: Date;
    active: boolean;
    hobbies?: string;
}

export interface TripProps {
    id: number;
    creatorId: number;
    journeyId: number;
    origin: string;
    destination: string;
    dateStart: Date;
    dateEnd: Date;
    transportation: number;
    experience: string;
    participants: string;
}

export interface EventProps {
    id: number;
    tripId: number;
    location: string;
    date: Date;
    category: string;
    description: string;
}

export interface JourneyProps {
    id: number;
    origin: string;
    length: number;
    startDate: Date;
    endDate: Date;
    lastDestination: string;
}
