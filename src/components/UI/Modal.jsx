// src/components/Common/Modal.jsx
const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 p-1 shadow-2xl transition-all">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <button 
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition"
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;