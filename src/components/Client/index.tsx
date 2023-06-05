import { FaPencilAlt } from "react-icons/fa";
import { useClientContext, useModalContext } from "@/contexts";
import Button from "../Button";
import styles from "./styles.module.css";

const Client = () => {
  const { clientData } = useClientContext();
  const { showModalEditClient } = useModalContext();

  const date = new Date(clientData.created_at);
  const day = date.getDay();
  const mouth = date.getMonth();
  const year = date.getFullYear();

  const clientCreatedAt: string = [
    day < 10 ? `0${day}` : day.toString(),
    mouth < 10 ? `0${mouth}` : mouth.toString(),
    year.toString()
  ].join("/");

  return (
    <section className={styles.profile}>
      <header>
        <h2>{clientData.full_name}</h2>

        <Button color="purple" format="square" type="button" onClick={showModalEditClient}>
          <FaPencilAlt />
        </Button>
      </header>

      <p>{clientData.email}</p>
      <p>{clientData.phone}</p>
      <p>Conta criada em: {clientCreatedAt}</p>
    </section>
  )
}

export default Client;
