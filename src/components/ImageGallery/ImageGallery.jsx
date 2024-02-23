import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li className={css.galleryItem} key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
