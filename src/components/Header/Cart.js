import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";

const Cart = () => {
  const cart = useContext(cartContext);
  const [width,setWidth] = useState(window.innerWidth);

  const increaseQuantityHandler = (e, id) => {
    e.stopPropagation();
    cart.setCartDetails((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState[id].quantity = prevState[id].quantity + 1;
      return newState;
    });
  };

  const decreaseQuantityHandler = (e, id) => {
    e.stopPropagation();
    cart.setCartDetails((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState[id].quantity = prevState[id].quantity + 1;
      return newState;
    });
  };

  const deleteItemHandler = (e, id) => {
    e.stopPropagation();
    cart.setCartDetails((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      delete newState[id];
      return newState;
    });
  };

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
      <div className="cart__header">
        <p>Cart</p>
      </div>
   {width > 600 &&    <div className="cart__item border__bottom">
        <p className="flex-6" style={{ color: "#22262A" }}>
          PRODUCT
        </p>
        <p className="flex-2" style={{ color: "#22262A" }}>
          PRICE
        </p>
        <p className="flex-2" style={{ color: "#22262A" }}>
          QTY
        </p>
        <p className="flex-2" style={{ color: "#22262A" }}>
          UNIT PRICE
        </p>
      </div> }
      {Object.entries(cart.cartDetails).map(([key, value]) => {
        return (
       width > 600 ?   <div className="cart__item cart__item__border" key={key}>
            <div className="flex-6 label15 cart__product__description">
              <p
                className="delete__item"
                onClick={(e) => deleteItemHandler(e, key)}
              >
                X
              </p>
              <img width="123px" height="123px" src={value.image} alt="cart" />
              <p>{value.name}</p>
            </div>
            <p className="flex-2 label15">
              ₹{parseInt(value.price) * parseInt(value.quantity)}
            </p>
            <div className="flex-2 label15">
              <div className="quantity__container">
                <p
                  style={{
                    color: "#33a0ff",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => decreaseQuantityHandler(e, key)}
                >
                  -
                </p>
                <p>{value.quantity}</p>
                <p
                  style={{
                    color: "#33a0ff",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => increaseQuantityHandler(e, key)}
                >
                  +
                </p>
              </div>
            </div>
            <p className="flex-2 label15">₹{parseInt(value.price)}</p>
          </div> : <div className="cart__item cart__item__border" key={key}>
          <p
                className="delete__item"
                onClick={(e) => deleteItemHandler(e, key)}
              >
                X
              </p>
            <div className="label15 cart__product__description">
            
              <img width="63px" height="63px" src={value.image} alt="cart" />
             
            </div>
            <div>
            <p>{value.name}</p>
      
            <div className="label15 quantity__flex">
              <div className="quantity__container">
                <p
                  style={{
                    color: "#33a0ff",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => decreaseQuantityHandler(e, key)}
                >
                  -
                </p>
                <p>{value.quantity}</p>
                <p
                  style={{
                    color: "#33a0ff",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => increaseQuantityHandler(e, key)}
                >
                  +
                </p>
              </div>
              <p className=" label15">
              ₹{parseInt(value.price) * parseInt(value.quantity)}
            </p>
            </div>
          
       
          </div>
          </div>
        );
      })}
      <div className="checkout__details">
        <div>
            <input className="input__field" type="text" placeholder="Voucher code" /><button className="btn redeem_btn ">Redeem</button>
        </div>
        <div>
            <div className="subtotal">
                <p className="label5">Subtotal</p>
                <p className="label5">₹{totalPrice()}</p>
            </div>
            <div className="fee">
                <p className="label5">Shipping Fee</p>
                <p className="label5">₹20</p>
            </div>
            <div className="coupon">
                <p className="label5">Coupon</p>
                <p className="label5">No</p>
            </div>
            <div className="total">
                <p className="label2" style={{fontSize : "20px"}}>TOTAL</p>
                <p className="label2"  style={{fontSize : "20px"}}>₹{totalPrice() + 20}</p>
            </div>
            <div  >
              <button className="btn redeem_btn" style={{width : "100%"}}>Checkout</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
