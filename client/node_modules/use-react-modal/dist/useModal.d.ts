import React from 'react';
declare type UseModalArgs = {
    onOpen: any;
    onClose: any;
    background: string;
};
export declare const useModal: ({ onOpen, onClose, background, ...config }?: UseModalArgs) => any[] & {
    Modal: (props: any) => JSX.Element;
    toggleModal: any;
    openModal: any;
    closeModal: any;
    isOpen: any;
    targetRef: any;
    backdropRef: any;
    modalRef: React.MutableRefObject<HTMLDivElement>;
};
export default useModal;
