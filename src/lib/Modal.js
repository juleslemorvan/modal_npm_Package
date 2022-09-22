import "./modal.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Employee Created !</h2>
        <button className="close-modal">Close</button>
      </div>
    </div>
  );
};

export default Modal;
