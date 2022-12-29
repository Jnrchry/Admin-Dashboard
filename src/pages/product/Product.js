import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../components/data";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales Performance" />
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEr0apRE3qSAaer4m3Hm2zo_cFXYu7nfBKFw&usqp=CAU"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">134 </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">sales: </span>
              <span className="productInfoValue">134 </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">active: </span>
              <span className="productInfoValue">yes </span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">in stock: </span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom"></div>
    </div>
  );
};

export default Product;
