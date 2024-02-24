import { useState, useEffect } from 'react';
import searchImages from '../api';
// import ReactModal from 'react-modal';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';

// import ImageModal from './ImageModal/ImageModal';
// import ImageCard from './ImageGallery/ImageCard/ImageCard';

// ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(1, 1, 1, 0.72)';
// const costumStyles = {
//   content: {
//     content: '',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '600px',
//   },
// };

const App = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  // const [showModal, setShowModal] = useState(false);
  // const handelSubmit = async () => {
  //   try {
  //     setLoader(true);
  //     // setImages([]);
  //     const data = await searchImages(searchValue, page);

  //     setImages(prev => [...prev, ...data]);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoader(false);
  //   }
  // };

  const onSubmit = query => {
    setImages([]);
    setPage(1);
    setSearchValue(query);
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (searchValue === '') {
          return;
        }
        setLoader(true);

        const data = await searchImages(searchValue, page);

        setImages(prev => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchImages();
  }, [page, searchValue]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {images.length > 0 && <ImageGallery items={images} />}
      {error && <ErrorMessage />}

      {loader && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={onClick} />}
    </>
  );
};

export default App;
