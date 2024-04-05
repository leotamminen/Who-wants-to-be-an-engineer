import axios from 'axios';
const baseUrl = '/api/apiquestions';

const getQuestion = async () => {
    const request = axios.get(`${process.env.REACT_APP_BASE_URL}${baseUrl}`);
    const response = await request;
    return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getQuestion }