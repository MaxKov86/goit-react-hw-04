// import css from './ImageModal.module.css'
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
const modalStyle = {
  overlay: { backgroundColor: 'rgba(46, 44, 44, 0.110)' },
  content: {
    content: '',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    height: '100%',
  },
};

const ImageModal = ({ onCloseModal, items }) => {
  return (
    <>
      {items.map(item => (
        <ReactModal
          key={item.id}
          isOpen={true}
          onRequestClose={onCloseModal}
          shouldCloseOnEsc={true}
          style={modalStyle}
        >
          <img src={item.urls.regular} width={'100%'} height={'100%'} />
        </ReactModal>
      ))}
    </>
  );
};
export default ImageModal;
