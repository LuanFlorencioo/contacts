import Button from "@/components/Button";
import Form from "@/components/Form";
import { useClientContext, useModalContext } from "@/contexts";
import { iContactUpdate } from "@/interfaces";
import { useForm } from "react-hook-form";

interface iModalEditContactProps {
  contactId: string
}

const ModalEditContact = ({ contactId }: iModalEditContactProps) => {
  const { updateContact } = useClientContext();
  const { closeModal } = useModalContext();

  const { register, handleSubmit } = useForm<iContactUpdate>({});

  const submit = async (formData: iContactUpdate) => {
    const data: iContactUpdate = {};

    if (formData.full_name) {
      data.full_name = formData.full_name
    }

    if (formData.email) {
      data.email = formData.email
    }

    if (formData.phone) {
      data.phone = formData.phone
    }

    await updateContact(data, contactId);
    closeModal();
  }

  return (
    <>
      <h2>Editar contato</h2>

      <Form onSubmit={handleSubmit(submit)}>
        <div>
          <div>
            <label htmlFor="full_name">nome completo</label>
            <input
              type="text"
              id="full_name"
              placeholder="Digite aqui o nome completo..."
              {...register("full_name")}
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite aqui o email..."
              {...register("email")}
            />
          </div>

          <div>
            <label htmlFor="phone">telefone</label>
            <input
              type="text"
              id="phone"
              placeholder="Digite aqui o telefone..."
              {...register("phone")}
            />
          </div>
        </div>

        <Button type="submit" color="purple" format="rectangule">
          Confirmar edição
        </Button>
      </Form>

      <Button type="button" color="grey" format="rectangule" onClick={closeModal}>
        Cancelar
      </Button>
    </>
  )
}

export default ModalEditContact;
