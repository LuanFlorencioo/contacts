import { createContext, useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { api, storeToken } from "@/services";
import { iClientRequest, iLogin } from "@/interfaces";
import { useAppContext } from "./AppContext";

interface iAuthProviderData {
  loginRequest: (formData: iLogin) => Promise<void>
  registerRequest: (formData: iClientRequest) => Promise<void>
}

interface iAuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<iAuthProviderData>({} as iAuthProviderData);

const AuthProvider = ({ children }: iAuthProviderProps) => {
  const { handleLoading } = useAppContext();
  const router = useRouter();

  const loginRequest = async (formData: iLogin) => {
    try {
      handleLoading(true);
      await storeToken(formData);
      handleLoading(false);
      router.push("/contacts");
    }
    catch (err) {
      console.log(err);
      toast.error("Não foi possível fazer login. Verifique se os dados estão corretos");
      handleLoading(false);
    }
  }

  const registerRequest = async (formData: iClientRequest) => {
    try {
      handleLoading(true)
      await api.post("/clients", formData);
      const { email, password } = formData;
      await storeToken({email, password});
      handleLoading(false);
      router.push("/contacts");
    }
    catch (err) {
      if (err instanceof AxiosError && err.response!.status === 409) {
        toast.error("Este email já está sendo usado. Tente usar outro endereço de email");
      }

      handleLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{loginRequest, registerRequest}}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = (): iAuthProviderData => useContext(AuthContext);

export {
  AuthProvider,
  useAuthContext,
}
