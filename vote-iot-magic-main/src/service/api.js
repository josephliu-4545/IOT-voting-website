import axios from 'axios';


const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});


export const fetchVotes = async () => {
  try {
    const response = await API.get('/votes'); 
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};


export const postVote = async (voteData) => {
  try {
    const response = await API.post('/vote', voteData); // Backend route: /api/vote
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export default API;