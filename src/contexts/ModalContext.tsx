import Modal from "@/components/Modal";
import ModalCreateContact from "@/components/Modal/ModalCreateContact";
import ModalDeleteClient from "@/components/Modal/ModalDeleteClient";
import ModalDeleteContact from "@/components/Modal/ModalDeleteContact";
import ModalEditClient from "@/components/Modal/ModalEditClient";
import ModalEditContact from "@/components/Modal/ModalEditContact";
import { createContext, useContext, useState } from "react";

interface iModalProviderData {
  showModalEditClient: () => void
  showModalDeleteClient: () => void
  showModalCreateContact: () => void
  showModalEditContact: (props: {contactId: string}) => void
  showModalDeleteContact: (props: {contactId: string}) => void
  closeModal: () => void
}

interface iModalProviderProps {
  children: React.ReactNode
}

const ModalContext = createContext<iModalProviderData>({} as iModalProviderData);

const ModalProvider = ({ children }: iModalProviderProps) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState(undefined as React.ReactNode);

  const showModalEditClient = () => {
    setContentModal(<ModalEditClient />);
    setIsShowModal(true);
  }

  const showModalDeleteClient = () => {
    setContentModal(<ModalDeleteClient />);
  }

  const showModalCreateContact = () => {
    setContentModal(<ModalCreateContact />);
    setIsShowModal(true);
  }

  const showModalEditContact = (props: {contactId: string}) => {
    setContentModal(<ModalEditContact contactId={props.contactId} />);
    setIsShowModal(true);
  }

  const showModalDeleteContact = (props: {contactId: string}) => {
    setContentModal(<ModalDeleteContact contactId={props.contactId} />);
    setIsShowModal(true);
  }

  const closeModal = () => {
    setIsShowModal(false);
  }

  return (
    <ModalContext.Provider value={{
      showModalEditClient,
      showModalDeleteClient,
      showModalCreateContact,
      showModalEditContact,
      showModalDeleteContact,
      closeModal,
    }}>
      {children}

      {isShowModal && <Modal>{contentModal}</Modal>}
    </ModalContext.Provider>
  )
}

const useModalContext = () => useContext(ModalContext);

export {
  ModalProvider,
  useModalContext,
}
