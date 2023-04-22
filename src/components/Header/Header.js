import Profile from "../../Images/profile_icon.svg";
import Bag from "../../Images/bag_icon.svg";
import Search from "../../Images/search_icon.svg";
import iShop from "../../Images/iSHOP Logo.png";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";

const Header = () => {
  const cart = useContext(cartContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [width,setWidth] = useState(window.innerWidth);

  const totalPrice = () =>{
    let totalPrice = 0;
    Object.entries(cart.cartDetails)?.forEach(([key,value]) =>{
      totalPrice += parseInt(value.quantity) * parseInt(value.price)
    })
    return totalPrice;
  }
  
  useEffect(() =>{
    const resize = () =>{
     setWidth(window.innerWidth);
    } 
    window.addEventListener('resize',resize);
    return () =>{
     window.removeEventListener('resize',resize);
    }
   })
  return (
    <>
      <div className="header__container" style={{ transform: open || width > 600 ? "translateY(0)" : "translateY(-200%)" }}>
        <div className="flex mr-36">
          <img className="mr-8" src={Profile} alt="userProfile" />
          <p className="label1">My Profile</p>
        </div>
        <div className="flex mr-72" onClick={() => navigate("/cart")}>
          <img className="mr-8" src={Bag} alt="Bag" />
          <span className="quantity">{Object.entries(cart.cartDetails).length}</span>
          <p className="label1">
           {Object.entries(cart.cartDetails).length === 1 ? "1 item" : `${Object.entries(cart.cartDetails).length} items`} <span className="opacity-50">₹{totalPrice()}</span>
          </p>
        </div>
        <div className="flex ">
          <img src={Search} alt="Search" />
        </div>
      </div>
      <div className="navbar__container" style={{marginBottom : open ?  "18rem" : "0",
    transition:  "0.2s"}}>
        <div className="ishop__image" style={{ margin: "2.5rem 0 1rem 0" }}>
          <img src={iShop} alt="iShop" />
        </div>
        <div>
          <ul className="nav__list"   style={{ transform: open || width >  600? "translateY(0)" : "translateY(-200%)" }}>
            <li className="label1 mr-64">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                isActive ? "active" : "inactive"
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="label1 mr-64">
              <NavLink to="/store/All"
              className={({ isActive, isPending }) =>
              isActive ? "active" : "inactive"
              }
              >STORE</NavLink>
            </li>
            <li className="label1 mr-64">
              <NavLink to="/store/Mobile"
              className={({ isActive, isPending }) =>
              isActive ? "active" : "inactive"
              }
              >MOBILE</NavLink>
            </li>
            <li className="label1 mr-64">
              <NavLink to="/store/Ipad"
              className={({ isActive, isPending }) =>
              isActive ? "active" : "inactive"
              }
              >IPAD</NavLink>
            </li>
            <li className="label1 mr-64">
              <NavLink to="/store/Macbook"
              className={({ isActive, isPending }) =>
              isActive ? "active" : "inactive"
              }
              >MACBOOK</NavLink>
            </li>
            <li className="label1 mr-64">
              <NavLink to="/store/Accesories"
              className={({ isActive, isPending }) =>
              isActive ? "active" : "inactive"
              }
              >ACCESORIES</NavLink>
            </li>
          </ul>
        </div>
        <div className="burger" onClick={() => setOpen((open) => !open)}>
        <div
          className="burger__line"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        ></div>
        <div className="burger__line" style={{ opacity: open ? "0" : "1" }}>
          {" "}
        </div>
        <div
          className="burger__line"
          style={{ transform: open ? "rotate(-45deg)" : "rotate(0deg)" }}
        ></div>
      </div>
      </div>
    </>
  );
};

export default Header;
