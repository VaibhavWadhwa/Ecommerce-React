import "./Style.css";
import "./Header/Header.css";
import ImageCard from "./ImageCard";
import Banner from "../Images/2_corousel.png";
import Shipping from "../Images/shipping.png";
import Refund from "../Images/refund.png";
import Support from "../Images/support.png";
import FeaturedProducts from "./FeaturedProducts";
import {useContext, useEffect, useState } from "react";
import { cartContext } from "../App";

const Home = () => {
  const [productDetails,setProductDetails] = useState([]);
  const [width,setWidth] = useState(window.innerWidth);
  const cart = useContext(cartContext);

  const setTypeHandler  = (e,value) =>{
    cart.setType(() => value)
  }

  useEffect(() => {
      fetch(`${process.env.REACT_APP_WEB_SERVICE}/${cart.type}`).then(res => res.json())
      .then(data =>{
        setProductDetails(() => data.details);
      })
  },[cart.type])

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
      <div className="banner">
        <img className="banner__image" src={Banner} alt="Banner" />
      </div>
      <div className="home__container">
        <p className="label2">BEST SELLER</p>
      {width > 600 ?  <ul className="navbar2">
          <li className={cart.type === "bestseller" ? "listActive" : "listInactive"} onClick={(e) => setTypeHandler(e,"bestseller")} >All</li>
          <li className={cart.type === "macbook" ? "listActive" : "listInactive"} onClick={(e) => setTypeHandler(e,"macbook")}>Mac</li>
          <li className={cart.type === "mobile" ? "listActive" : "listInactive"} onClick={(e) => setTypeHandler(e,"mobile")}>Mobile</li>
          <li className={cart.type === "ipad" ? "listActive" : "listInactive"} onClick={(e) => setTypeHandler(e,"ipad")}>iPad</li>
          <li className={cart.type === "accesories" ? "listActive" : "listInactive"} onClick={(e) => setTypeHandler(e,"accesories")}>Accesories</li>
        </ul>  : <select style={{
              width :  "70%",
              height: "3rem",
              textAlign: "center",
              marginTop: "14px"
          
        }} onChange={(e) => setTypeHandler(e,e.target.value)}>
        <option className={cart.type === "bestseller" ? "listActive" : "listInactive"} value="bestseller" onClick={(e) => setTypeHandler(e,"bestseller")} >All</option>
          <option className={cart.type === "macbook" ? "listActive" : "listInactive"} value="macbook" onClick={(e) => setTypeHandler(e,"macbook")}>Mac</option>
          <option className={cart.type === "mobile" ? "listActive" : "listInactive"} value="mobile" onClick={(e) => setTypeHandler(e,"mobile")}>Mobile</option>
          <option className={cart.type === "ipad" ? "listActive" : "listInactive"} value="ipad" onClick={(e) => setTypeHandler(e,"ipad")}>iPad</option>
          <option className={cart.type === "accesories" ? "listActive" : "listInactive"} value="accesories" onClick={(e) => setTypeHandler(e,"accesories")}>Accesories</option>
          </select> }
        <div className="products__section">
          {productDetails
            .map((product) => {
              return <ImageCard category="bestseller"
              id={product.id}
              name={product.name}
              image = {product.image}
              originalPrice={product.oPrice}
              discountedPrice={product.price}
              />;
            })}
        </div>
        <div className="banner2">
          <div className="banner__content">
            <p className="label4 size-66">iPhone 6 Plus</p>
            <p className="label4 size-24">Performance and design.Taken</p>
            <p className="label4 size-24">right to the edge</p>
            <p className="label4 underline">SHOP NOW</p>
          </div>
          <img className="banner2__image" src={Banner} alt="Banner" />
        </div>
        <div className="services__container">
          <div className="service__details">
            <img width="70px" height="46px" src={Shipping} alt="Shipping" />
            <p className="label1 size-24 label__margin1">FREE SHIPPING</p>
            <p className="label5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor minim veniam, quis nostrud reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div className="service__details">
            <img width="48px" height="54px" src={Refund} alt="Refund" />
            <p className="label1 size-24 label__margin2">100% REFUND</p>
            <p className="label5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor minim veniam, quis nostrud reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div className="service__details">
            <img width="47px" height="61px" src={Support} alt="Support" />
            <p className="label1 size-24 label__margin3">SUPPORT 24/7</p>
            <p className="label5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor minim veniam, quis nostrud reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
        <div className="featured__products__container">
          <FeaturedProducts />
        </div>
      </div>
    </>
  );
};

export default Home;
