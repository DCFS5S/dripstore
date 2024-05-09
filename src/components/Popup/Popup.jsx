import Modal from "react-modal"
import "./Popup.css"

export const Popup = ({isOpen, onRequestClose, message}) => {
  
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Popup Modal'
    >
      <div className="popup">
        <p>{message}</p>
        <button onClick={onRequestClose}>Fechar</button>
      </div>
    </Modal>
  )
}
