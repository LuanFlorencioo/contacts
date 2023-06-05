import Header from "../Header";
import Client from "../Client";
import ContactList from "../ContactList";
import font from "@/styles/font";
import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <div className={`${styles.contacts} ${font}`}>
      <Header />

      <main>
        <Client />

        <ContactList />
      </main>
    </div>
  )
}

export default Contacts;
