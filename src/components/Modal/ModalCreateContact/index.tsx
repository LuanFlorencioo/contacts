import { Button, Form } from "@/components";
import { useClientContext, useModalContext } from "@/contexts"
import { iContactRequest } from "@/interfaces";
import { contactSchemaRequest } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ModalCreateContact = () => {
  const { closeModal } = useModalContext();
  const { createContact } = useClientContext();

  const { register, handleSubmit } = useForm<iContactRequest>({
    resolver: zodResolver(contactSchemaRequest)
  })

  const submit = async (formData: iContactRequest) => {
    await createContact(formData);
    closeModal();
  }

  return (
    <>
      <h2>Criar novo contato</h2>

      <Form onSubmit={handleSubmit(submit)}>
        <div>
          <div>
            <label htmlFor="full_name">nome completo</label>
            <input
              type="text"
              id="full_name"
              placeholder="Digite o nome completo..."
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
          Criar contato
        </Button>
      </Form>

      <Button type="button" color="grey" format="rectangule" onClick={closeModal}>
        Cancelar
      </Button>
    </>
  )
}

export default ModalCreateContact;
