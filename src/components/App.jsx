import { useState } from 'react';
import searchImages from '../api';

import SearchBar from './SearchBar/SearchBar';
// import searchImages from '../api';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   console.log(images);
  // }, [images]);
  const handelSubmit = async query => {
    try {
      setImages([]);
      setLoading(true);
      const data = await searchImages(query);
      setImages(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SearchBar onSubmit={handelSubmit} />
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && <LoadMoreBtn />}
    </>
  );
};

export default App;
