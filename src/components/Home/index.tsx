import { useState } from "react";
import Greetings from "../Greetings";
import Login from "../Login";
import Register from "../Register";
import font from "@/styles/font";
import styles from "./styles.module.css";

const Home = () => {
  const [content, setContent] = useState<"login" | "register">("login");
  
  const handleContent = () => setContent(
    content === "login" ? "register" : "login"
  )

  return (
    <div className={`${styles.home} ${font}`}>
      <main>
        <Greetings />

        {
          content === "login"
          ? <Login handleContent={handleContent} />
          : <Register handleContent={handleContent} />
        }
      </main>
    </div>
  )
}

export default Home;
