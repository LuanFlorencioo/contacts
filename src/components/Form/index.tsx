import { ReactNode } from "react";
import styles from "./styles.module.css";

interface iFormProps {
  children: ReactNode
  onSubmit: () => void
}

const Form = ({children, onSubmit}: iFormProps) => {
  return (
    <form onSubmit={onSubmit} className={styles.form} noValidate>
      {children}
    </form>
  )
}

export default Form;
