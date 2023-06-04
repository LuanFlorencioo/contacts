import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { useAuthContext } from "@/contexts";
import { clientLoginSchema } from "@/schemas";
import { iLogin } from "@/interfaces";
import Form from "../Form";
import Button from "../Button";
import styles from "./styles.module.css";

interface iLoginProps {
  handleContent: () => void
}

const Login = ({ handleContent }: iLoginProps) => {
  const { register, handleSubmit } = useForm<iLogin>({
    resolver: zodResolver(clientLoginSchema)
  })

  const { loginRequest } = useAuthContext();

  const submit = async (formData: iLogin) => {
    await loginRequest(formData);
  }

  return (
    <div className={styles.login}>
      <h2>Login</h2>

      <Form onSubmit={handleSubmit(submit)}>
        <div>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" placeholder="Digite aqui seu email..." {...register("email")} />
          </div>

          <div>
            <label htmlFor="password">senha</label>
            <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")} />
          </div>
        </div>

        <Button type="submit" color="purple" format="rectangule">
          <FiLogIn width={14} height={14} />
          Entrar
        </Button>
      </Form>

      <p>Ou crie uma nova conta</p>

      <Button type="button" color="grey" format="rectangule" onClick={handleContent}>
        Criar nova conta
      </Button>
    </div>
  )
}

export default Login;
