import { FaPencilAlt, FaTrash } from "react-icons/fa";
import Button from "../Button";
import styles from "./styles.module.css";
import { iContact } from "@/interfaces";
import { useModalContext } from "@/contexts";

interface iContactProps {
  data: iContact
}

const Contact = ({data}: iContactProps) => {
  const { showModalEditContact, showModalDeleteContact } = useModalContext();

  return (
    <li className={styles.contact}>
      <h3>{data.full_name}</h3>
      <p>{data.email}</p>
      <p>{data.phone}</p>

      <div>
        <Button color="purple" format="square" type="button" onClick={() => showModalEditContact({contactId: data.id})}>
          <FaPencilAlt />
        </Button>

        <Button color="grey" format="square" type="button" onClick={() => showModalDeleteContact({contactId: data.id})}>
          <FaTrash />
        </Button>
      </div>
    </li>
  )
}

export default Contact;
