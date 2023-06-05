import styles from "./styles.module.css";

interface iModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: iModalProps) => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
