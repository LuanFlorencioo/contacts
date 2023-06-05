import { BiPlus } from "react-icons/bi";
import Button from "../Button";
import Contact from "../Contact";
import styles from "./styles.module.css";
import { useClientContext, useModalContext } from "@/contexts";

const ContactList = () => {
  const { contactsData } = useClientContext();
  const { showModalCreateContact } = useModalContext();

  return (
    <section className={styles.contact_list}>
      <Button color="purple" format="rectangule" type="button" onClick={showModalCreateContact}>
        <BiPlus /> Criar novo contato
      </Button>

      <ul>
        {
          contactsData.map(contact => (
            <Contact
              key={contact.id}
              data={contact}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default ContactList;
