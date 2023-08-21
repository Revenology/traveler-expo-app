import axios from 'axios';
export const testQuery = async () => {
    const data = axios.get('test');
    return data;
};
