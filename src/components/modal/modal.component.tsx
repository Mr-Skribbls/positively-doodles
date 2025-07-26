import { FC } from 'react';

import './modal.css';

interface ModalProps {
  isOpen: boolean,
  close: () => void,
  children: React.ReactNode,
}

const Modal:FC<ModalProps> = ({
  isOpen,
  close,
  children,
}) => {
  let className = 'modal';
  if(isOpen) className += ' open';

  return (
    <div className={className}>
      <div className='image-container'>
        <div className='modal-contents'>
          {children}
          <div className='close-btn' onClick={() => close()}>X</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;