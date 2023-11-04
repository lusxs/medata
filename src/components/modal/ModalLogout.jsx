import PropTypes from "prop-types";

const ModalLogout = ({ isOpen, onClose, logout }) => {
  const modalClass = isOpen ? "" : "hidden";
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${modalClass}`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="absolute p-6 bg-white rounded shadow-md">
        <h2 className="text-lg font-semibold text-center">Keluar</h2>
        <p>Anda yakin ingin keluar?</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={logout}
            className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded"
          >
            Ya
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 mt-4 font-bold text-black bg-white border rounded"
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

ModalLogout.propTypes = {
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  logout: PropTypes.func,
};

export default ModalLogout;
