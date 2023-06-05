import { ReactNode } from "react";
import styles from "./styles.module.css";

interface iButtonProps {
  children: ReactNode
  color: "grey" | "purple"
  format: "square" | "rectangule"
  type: "submit" | "button"
  onClick?: () => void
}

const Button = ({children, color, format, type, onClick}: iButtonProps) => {
  const setColor = color === "purple" 
    ? styles.color_purple 
    : styles.color_grey

  const setFormat = format === "square"
    ? styles.format_square
    : styles.format_rectangule

  return (
    <button 
      className={`${styles.button} ${setColor} ${setFormat}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
