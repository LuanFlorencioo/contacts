import { ToastContainer } from "react-toastify";
import { AppProvider, AuthProvider } from "@/contexts";
import { Head, Home } from "@/components";
import "react-toastify/dist/ReactToastify.css";

const ContactsApp = () => {
  return (
    <>
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
        <AuthProvider>
          <Head />
          <Home />
        </AuthProvider>
      </AppProvider>
    </>
  )
}

export default ContactsApp;
