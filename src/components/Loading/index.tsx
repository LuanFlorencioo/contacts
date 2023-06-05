import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div></div>

      <p>Estamos conectando com o servidor. Espere mais alguns segundos...</p>
    </div>
  )
}

export default Loading;
