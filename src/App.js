import { createContext, useState } from "react";
import Router from "./Router";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export   const cartContext = createContext();
const App = () => {
  const [cartDetails,setCartDetails] = useState({});
  const [type,setType] = useState("bestseller")
  return (
    <cartContext.Provider value={{cartDetails,setCartDetails,type,setType}} >
      <Header />
      <Router />
      <Footer />
      <ToastContainer  />
      </cartContext.Provider>
  );
};

export default App;
