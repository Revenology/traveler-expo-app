import axios from 'axios';
export const testQuery = async () => {
	const data = axios.get('test');
	return data;
};

export const getFriends = async (count: number) => {
	const data = await axios.get(`https://randomuser.me/api/?results=${count}`);
	return data.data.results;
};
