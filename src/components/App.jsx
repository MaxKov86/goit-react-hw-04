import { useState, useEffect } from 'react';
import searchImages from '../api';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onSubmit = query => {
    setImages([]);
    setPage(1);
    setSearchValue(query);
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await searchImages(searchValue, page);
        setImages(prev => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    if (searchValue === '') {
      return;
    }
    setLoader(true);
    fetchImages();
  }, [page, searchValue]);

  const onClick = () => {
    setPage(page + 1);
  };

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {images.length > 0 && (
        <ImageGallery items={images} onModalOpen={onOpenModal} />
      )}
      {error && <ErrorMessage />}

      {loader && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={onClick} />}

      <ImageModal
        isOpen={showModal}
        onCloseModal={onCloseModal}
        items={images}
      />
    </>
  );
};

export default App;
