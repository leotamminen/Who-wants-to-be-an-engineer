import axios from 'axios';
const baseUrl = '/api/lifelines';

const askFriend = async (input) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${baseUrl}/askfriend`, {
      question: input
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request cancelled:', error.message);
    } else {
      console.error('Error asking friend:', error.message);
    }
    return null;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { askFriend };