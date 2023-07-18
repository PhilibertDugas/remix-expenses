import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <div
      className="modal-backdrop fixed top-0 left-0 w-full h-screen bg-black/70"
      onClick={onClose}
    >
      <dialog
        className="fixed top-1/4 w-10/12 rounded-md border-none bg-blue-500 animate-[fade-slide-down_0.5s_ease-out_forwards]"
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
