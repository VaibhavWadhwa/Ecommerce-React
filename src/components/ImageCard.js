import { useContext } from "react";
import { cartContext } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ImageCard = ({type,id,category,name,image,originalPrice,discountedPrice}) => {
  const cart = useContext(cartContext);
  const navigate = useNavigate();

  const addToCartHandler = () =>{
    const cartObj = {
      id,
      name,
      image,
      price : discountedPrice.slice(1).replaceAll(",",""),
      quantity : 1
    }

    if(cart.cartDetails[id]){
      toast.info('Product Alreast Exists', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {backgroundColor : "#F5F7FA;"}
        });
        return;
    }
    cart.setCartDetails(prevState =>{
      const newState  = {...prevState};
      newState[id] = cartObj;
      return newState;
    });
    
    toast.success('Product Added to Cart Successfully', {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {backgroundColor : "#FF4858"}
      });
  }

  const buyProductHandler = () =>{
    const cartObj = {
      id,
      name,
      image,
      price : discountedPrice.slice(1).replaceAll(",",""),
      quantity : 1
    }
    cart.setCartDetails(prevState =>{
      const newState  = {...prevState};
      newState[id] = cartObj;
      return newState;
    });

    navigate("/cart");
    
  }

  return (
    <div className="product__details">
      <div className="product__image">
        <img
          width= { type ?"180px" :"236px"}
          height={ type ?"120px" :"153px"}
          src={image ? image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=4000&hei=2422&fmt=jpeg&qlt=90&.v=1671304673229"}
          alt="product"
        />
      </div>
      <p className="label1 pt-20">{name ? name :"Apple Macbook Pro"}</p>
      <div className="rating__image">
        <img
          width="130px"
          height="50px"
          src="https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg"
          alt="rating"
        />
      </div>
      <p className="label3">
        {discountedPrice ? discountedPrice : "$499"} <span className="originalPrice">{originalPrice ? originalPrice :"$599"}</span>
      </p>
      <div className="btn__container">
        <button className="btn cart__btn" onClick={addToCartHandler}>Add to Cart</button>
        <button className="btn buy__btn" onClick={buyProductHandler}>Buy Now</button>
      </div>
    </div>
  );
};

export default ImageCard;
