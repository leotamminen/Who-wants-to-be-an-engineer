import axios from 'axios';
const baseUrl = '/api/dbquestions';

const getQuestion = async (difficulty) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}${baseUrl}/${difficulty}`, {
      timeout: 1000 // Timeout after one second
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request cancelled:', error.message);
    } else {
      console.error('Error fetching question:', error.message);
    }
    return null;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getQuestion }