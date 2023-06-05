import { GetServerSideProps, NextPage } from "next";
import { ToastContainer } from "react-toastify";
import nookies from "nookies";
import { AppProvider, ClientProvider, ModalProvider } from "@/contexts";
import { Head, Contacts as Page } from "@/components";
import "react-toastify/dist/ReactToastify.css";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  const authorization = cookies["Contacts | token"];
  if (!authorization) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const Contacts: NextPage = () => {
  return (
    <>
      <Head />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AppProvider>
        <ClientProvider>
          <ModalProvider>
            <Page />
          </ModalProvider>
        </ClientProvider>
      </AppProvider>
    </>
  )
}

export default Contacts;
