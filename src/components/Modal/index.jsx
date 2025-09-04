import clsx from "clsx";
import styles from "./Modal.module.scss";

function Modal({ open, setOpen, children }) {
    return (
        <div className={clsx(styles.container, { [styles.active]: open })}>
            <div className={styles.wrapper}>{children}</div>
            <div className={styles.overlay} onClick={() => setOpen(false)}></div>
        </div>
        
    );
}

export default Modal;
