import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const submitFormData = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/submit`, data);
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
  }
};
