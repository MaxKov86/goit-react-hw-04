import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onCardClick }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li onClick={onCardClick} className={css.galleryItem} key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
