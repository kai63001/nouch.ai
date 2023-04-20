import { useEffect, useRef, useState } from "react";

interface ModalInterface {
  children?: any | undefined;
  onOpen?: boolean;
  setCloseModal: (value: boolean) => void;
  className?: string;
}

const Modal = ({
  children,
  onOpen = false,
  setCloseModal,
  className = "bg-primary w-11/12 md:w-7/12 rounded-xl shadow-lg p-5 duration-200",
}: ModalInterface) => {
  const refModal: any = useRef(null);

  //check if click outside modal
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (refModal.current && !refModal?.current?.contains(e.target)) {
        setCloseModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  return (
    <>
      {onOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50 flex items-center justify-center">
          <div ref={refModal} className={className}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
