import Button from "@/components/Button";
import { useClientContext, useModalContext } from "@/contexts";

interface iModalDeleteContactProps {
  contactId: string
}

const ModalDeleteContact = ({ contactId }: iModalDeleteContactProps) => {
  const { deleteContact } = useClientContext();
  const { closeModal } = useModalContext();

  const submit = async () => {
    await deleteContact(contactId);
    closeModal();
  }

  return (
    <>
      <h2>Excluir contato</h2>

      <p>Tem certeza que quer excluir este contato?</p>

      <Button color="purple" format="rectangule" type="button" onClick={submit}>
        Sim, quero excluir este contato
      </Button>

      <Button color="grey" format="rectangule" type="button" onClick={closeModal}>
        Não
      </Button>
    </>
  )
}

export default ModalDeleteContact;
