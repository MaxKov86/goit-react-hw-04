import axios from 'axios';

const API_KEY = '3yTSMbvB6WVLwmn3CLFvDf8bU-8JkBsEFQgA50rh7qY';
const searchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&per_page=12&query=${query}`
  );
  

  return response.data.results;
};
export default searchImages;
