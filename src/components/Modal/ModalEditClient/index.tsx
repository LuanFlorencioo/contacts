import { Button, Form } from "@/components";
import { useClientContext, useModalContext } from "@/contexts";
import { iClientUpdate } from "@/interfaces";
import { useForm } from "react-hook-form";

const ModalEditClient = () => {
  const { clientData, updateClient } = useClientContext();
  const { closeModal, showModalDeleteClient } = useModalContext();

  const { register, handleSubmit } = useForm<iClientUpdate>({});

  const submit = async (formData: iClientUpdate) => {
    const data: iClientUpdate = {};

    if (formData.full_name) {
      data.full_name = formData.full_name
    }

    if (formData.email) {
      data.email = formData.email
    }

    if (formData.phone) {
      data.phone = formData.phone
    }

    if (await updateClient(data)) {
      closeModal()
    };
  }

  return (
    <>
      <h2>Editar perfil</h2>

      <Form onSubmit={handleSubmit(submit)}>
        <div>
          <div>
            <label htmlFor="full_name">nome completo</label>
            <input
              type="text"
              id="full_name"
              placeholder={clientData.full_name}
              {...register("full_name")}
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              placeholder={clientData.email}
              {...register("email")}
            />
          </div>

          <div>
            <label htmlFor="phone">telefone</label>
            <input
              type="text"
              id="phone"
              placeholder={clientData.phone}
              {...register("phone")}
            />
          </div>
        </div>

        <Button type="submit" color="purple" format="rectangule">
          Confirmar edição
        </Button>
      </Form>

      <Button type="button" color="grey" format="rectangule" onClick={showModalDeleteClient}>
        Deletar minha conta
      </Button>

      <Button type="button" color="grey" format="rectangule" onClick={closeModal}>
        Cancelar
      </Button>
    </>
  )
}

export default ModalEditClient;
