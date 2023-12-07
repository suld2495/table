import Modal from 'react-modal';

const FriendModal = ({ modal, name, description, closeModal }) => {
  return (
    <Modal isOpen={modal} onRequestClose={closeModal}>
      <h2>{name}</h2>
      <div className='detail'>
        {description}
      </div>
    </Modal>
  )
};

export default FriendModal;