import axios from 'axios';

const API_KEY = '3yTSMbvB6WVLwmn3CLFvDf8bU-8JkBsEFQgA50rh7qY';
const searchImages = async query => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=1&per_page=12&query=${query}`
    );
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export default searchImages;
