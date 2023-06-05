import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router";
import { parseCookies, destroyCookie } from "nookies";
import { iClientResponse, iClientRetrieve, iClientUpdate, iContact, iContactRequest, iContactUpdate } from "@/interfaces";
import { api } from "@/services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface iClientProviderData {
  clientData: iClientRetrieve
  contactsData: iContact[]
  createContact: (formData: iContactRequest) => Promise<void>
  updateContact: (formData: iContactUpdate, contactId: string) => Promise<void>
  deleteContact: (contactId: string) => Promise<void>
  updateClient: (formData: iClientUpdate) => Promise<boolean>
  deleteClient: () => Promise<void>
}

interface iClientProviderProps {
  children: React.ReactNode
}

const ClientContext = createContext<iClientProviderData>({} as iClientProviderData);

const ClientProvider = ({ children }: iClientProviderProps) => {
  const router = useRouter();
  const [clientData, setClientData] = useState<iClientRetrieve>({} as iClientRetrieve);
  const [contactsData, setContactsData] = useState<iContact[]>([] as iContact[])

  const auth = parseCookies()["Contacts | token"];
  api.defaults.headers.common.Authorization = `Bearer ${auth}`;

  const getClientData = async () => {
    try {
      const response = await api.get<iClientRetrieve>("/clients");
      const client = response.data;
      const contacts = client.contacts;
      setContactsData(contacts)
      setClientData(client);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getClientData()
  }, [])

  const createContact = async (formData: iContactRequest) => {
    try {
      const response = await api.post<iContact>("/contacts", formData);
      const contact = response.data;
      setContactsData([
        contact,
        ...contactsData,
      ])
      toast.success("Contato criado com sucesso")
    }
    catch (err) {
      if (err instanceof AxiosError && err.response!.status === 400) {
        toast.error("Dados inválidos");
      }
      console.log(err)
    }
  }

  const updateContact = async (formData: iContactUpdate, contactId: string) => {
    try {
      const response = await api.patch<iContact>(`/contacts/${contactId}`, formData);
      const contact = response.data;
      const newContactsData = contactsData.map(data => data.id === contactId ? contact : data)
      setContactsData([...newContactsData]);
      toast.success("Alteração feita com sucesso");
    }
    catch (err) {
      console.log(err);
      toast.error("Não foi possível fazer a alteração!");
    }
  }

  const deleteContact = async (contactId: string) => {
    try {
      await api.delete(`/contacts/${contactId}`);
      const newContactsData = contactsData.filter(data => data.id !== contactId);
      setContactsData([...newContactsData]);
      toast.success("Contato foi excluído com sucesso")
    }
    catch (err) {
      console.log(err);
      toast.error("Falha ao Deletar contato")
    }
  }

  const updateClient = async (formData: iClientUpdate) => {
    try {
      const response = await api.patch<iClientResponse>("/clients", formData);
      const client = response.data;
      setClientData({
        ...clientData,
        ...client,
      })
      toast.success("Alteração feita com sucesso");
      return true
    }
    catch (err) {
      if (err instanceof AxiosError) {
        if (err.response!.status === 400) {
          toast.error("Não foi possível fazer a alteração! Foram inserido(s) dados inválido(s)");
        }

        if (err.response!.status === 409) {
          toast.error("Este endereço de email já está sendo usado");
        }
      }
      return false
    }
  }

  const deleteClient = async () => {
    try {
      await api.delete("/clients");
      destroyCookie(null, "Contacts | token");
      router.push("/");
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <ClientContext.Provider value={{
      clientData,
      contactsData,
      createContact,
      updateContact,
      deleteContact,
      updateClient,
      deleteClient,
    }}>
      {children}
    </ClientContext.Provider>
  )
}

const useClientContext = () => useContext(ClientContext);

export {
  ClientProvider,
  useClientContext,
}
