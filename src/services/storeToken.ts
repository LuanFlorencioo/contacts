import { setCookie } from "nookies";
import { iLogin } from "@/interfaces";
import api from "./api";

const storeToken = async (data: iLogin) => {
  const response = await api.post("/login", data);
  const token = response.data.token;
  const options = {
    maxAge: 1800,
    path: "/",
  }

  setCookie(null, "Contacts | token", token, options);
}

export default storeToken;
