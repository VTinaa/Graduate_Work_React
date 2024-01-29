import styles from './modal.module.css'

import { createPortal } from 'react-dom';

const portalModal = document.getElementById('modal');

const Modal = (props) => {
    const { children, showModal, openModalFunc, onClose } = props;



    const handleClick = (e) => {
        e.stopPropagation();
        onClose();
    }

    const portalContent = (
        <div className={styles['common']} onClick={handleClick}>
            <div className={styles['content']} onClick={(e) => { e.stopPropagation() }}>
                {children}
            </div>
        </div>
    )
    return  showModal ? createPortal(portalContent, portalModal) : null;
}

export default Modal;