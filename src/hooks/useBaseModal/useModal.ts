import React from 'react';

type UseModalProps = {
  isOpen?: boolean;
};

const useModal = (props: UseModalProps) => {
  const bodyElement = document.querySelector('body');

  if (bodyElement) {
    if (props.isOpen) {
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.overflow = 'auto';
    }
  }

  return {
    bodyElement,
  };
};

export { useModal };
