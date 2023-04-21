import { useParams } from "react-router-dom";
import Banner from "../Images/2_corousel.png";
import ImageCard from "./ImageCard";
import { useEffect, useState } from "react";

const Store = () => {
  const [value, setValue] = useState(5000);

  const params = useParams();
  const [productDetails,setProductDetails] = useState([]);

  useEffect(() => {
      fetch(`${process.env.REACT_APP_WEB_SERVICE}/${params.name === "All" ? "bestseller" :params.name.toLowerCase()}`).then(res => res.json())
      .then(data =>{
        setProductDetails(() => data.details);
      })
  },[params.name])

  return (
    <>
      <div className="store__name__container">
        <p className="label7">
          Store <span style={{ color: " #C1C8CE" }}>/</span> {params.name}
        </p>
      </div>
      <div className="store__details__container">
        <div className="store__section w-30 d-none">
          <div className="store__option">
            <p>Accesories</p>
            <div className="store__option__section">
              <p className="label10">Apple Car</p>
              <p className="label10">2</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Air Port & Wireless</p>
              <p className="label10">20</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Cables & Docks</p>
              <p className="label10">12</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Cases & Films</p>
              <p className="label10">17</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Charging Devices</p>
              <p className="label10">8</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Headphones</p>
              <p className="label10">44</p>
            </div>
          </div>
          <div className="store__ranger">
            <p>PRICES</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <p className="label10"> Ranger</p>
              <p className="label10">₹0&nbsp;&nbsp;-&nbsp;&nbsp;₹{value}</p>
            </div>
            <input
              type="range"
              min="0"
              max="1000000"
              step="1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="color__options">
            <p>COLOR</p>
            <div className="color__container">
                <span className="span__circle color1" />
                <span className="span__circle color2 " />
                <span className="span__circle color3" />
                <span className="span__circle color4" />
                <span className="span__circle color5" />
                <span className="span__circle color6" />
            </div>
          </div>
          <div className="brand__options">
          <p>BRAND</p>
            <div className="store__option__section">
              <p className="label10">Apple Car</p>
              <p className="label10">2</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Air Port & Wireless</p>
              <p className="label10">20</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Cables & Docks</p>
              <p className="label10">12</p>
            </div>
            <div className="store__option__section">
              <p className="label10">Cases & Films</p>
              <p className="label10">17</p>
            </div>
          </div>
        </div>
        <div className="store__section w-70">
          <div className="banner3">
            <div className="banner__content">
              <p className="label4 size-36">iPhone 8</p>
              <p className="label4 size-10">Performance and design.Taken</p>
              <p className="label4 size-10">right to the edge</p>
              <p className="label4 underline">SHOP NOW</p>
            </div>
            <img
              className="banner3__image"
              height="100px"
              src={Banner}
              alt="Banner"
            />
          </div>
          <div className="products__store__header">
            <p className="label10">8 items</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="label10">Sort By</p>
              <select>
                <option>Name</option>
                <option>Price</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="label10">Show</p>
              <select>
                <option>8</option>
              </select>
            </div>
          </div>
          <div className="products__store__section">
            {productDetails
              .map((product,index) => {
                if(index <9)
                return <ImageCard type="store"
                id={product.id}
                name={product.name}
                image={product.image}
                originalPrice={product.oPrice}
                discountedPrice={product.price}
                />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
