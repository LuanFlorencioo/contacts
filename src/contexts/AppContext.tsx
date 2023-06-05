import { createContext, useContext, useState } from "react";
import { Loading } from "@/components";

interface iAppProviderData {
  handleLoading: (value: boolean) => void
}

interface iAppProviderProps {
  children: React.ReactNode
}

const AppContext = createContext<iAppProviderData>({} as iAppProviderData);

const AppProvider = ({ children }: iAppProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoading = (value: boolean) => setIsLoading(value);

  return (
    <AppContext.Provider value={{handleLoading}}>
      {children}
      {isLoading && <Loading />}
    </AppContext.Provider>
  )
}

const useAppContext = (): iAppProviderData => useContext(AppContext);

export {
  AppProvider,
  useAppContext,
}
