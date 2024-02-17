import css from './ImageCard.module.css';
import ReactModal from 'react-modal';

const ImageCard = ({ item: { urls, alt_description, user, likes } }) => {
  return (
    <div>
      <img
        className={css.cardImg}
        src={urls.small}
        alt={alt_description}
        width={'340px'}
        height={'300px'}
      />
      <div className={css.cardInfo}>
        <p>Photo by:{user.name}</p>
        <p>Likes:{likes}</p>
        <p></p>
      </div>
      <ReactModal>
        <img src={urls.regular} />
        <p>Photo by:{user.name}</p>
        <p>Likes:{likes}</p>
      </ReactModal>
    </div>
  );
};
export default ImageCard;
