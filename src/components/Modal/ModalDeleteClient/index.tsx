import Button from "@/components/Button";
import { useClientContext, useModalContext } from "@/contexts";

const ModalDeleteClient = () => {
  const { deleteClient } = useClientContext();
  const { closeModal } = useModalContext();

  const submit = async () => {
    await deleteClient();
  }

  return (
    <>
      <h2>Excluir conta</h2>

      <p>Tem certeza que quer excluir sua conta e todos os contatos vinculados permanente?</p>

      <Button color="purple" format="rectangule" type="button" onClick={submit}>
        Sim, quero excluir minha conta
      </Button>

      <Button color="grey" format="rectangule" type="button" onClick={closeModal}>
        Não
      </Button>
    </>
  )
}

export default ModalDeleteClient;
