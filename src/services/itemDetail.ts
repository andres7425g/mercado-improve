import axios from 'axios';

export const fetchItemDetail = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
