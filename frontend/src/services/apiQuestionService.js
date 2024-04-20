import axios from "axios";
const baseUrl = "/api/apiquestions";

const getQuestion = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}${baseUrl}`, {
      timeout: 3000 // Timeout after 3 seconds
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
export default { getQuestion };
