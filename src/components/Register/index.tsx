import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientRequestSchema } from "@/schemas";
import { useAuthContext } from "@/contexts";
import { iClientRequest } from "@/interfaces";
import Button from "../Button";
import Form from "../Form";
import styles from "./styles.module.css";

interface iRegisterProps {
  handleContent: () => void
}

const Register = ({ handleContent }: iRegisterProps) => {
  const { register, handleSubmit } = useForm<iClientRequest>({
    resolver: zodResolver(clientRequestSchema)
  })

  const { registerRequest } = useAuthContext();

  const submit = async (formData: iClientRequest) => {
    await registerRequest(formData);
  }

  return (
    <div className={styles.register}>
      <h2>Cadastro</h2>

      <Form onSubmit={handleSubmit(submit)}>
        <div>
          <div>
            <label htmlFor="full_name">nome completo</label>
            <input type="text" id="full_name" placeholder="digite seu nome completo" {...register("full_name")} />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="Digite aqui seu email..." {...register("email")} />
          </div>

          <div>
            <label htmlFor="phone">telefone</label>
            <input type="text" id="phone" placeholder="Digite seu telefone" {...register("phone")} />
          </div>

          <div>
            <label htmlFor="password">senha</label>
            <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")} />
          </div>
        </div>

        <Button type="submit" color="purple" format="rectangule">
          Cadastrar-se
        </Button>
      </Form>

      <Button type="button" color="grey" format="rectangule" onClick={handleContent}>
        Fazer Login
      </Button>
    </div>
  )
}

export default Register;
