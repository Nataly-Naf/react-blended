import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ modalIsOpen, alt, large, closeModal}) => {
    return (
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
            contentLabel={alt}
            onRequestClose={closeModal}
            // onAfterOpen={afterOpenModal}
        >
            <img src={large} alt={alt} />
      </Modal>
    )
}