import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../components/data";
import { Publish } from "@mui/icons-material";

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
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" name="" placeholder="Apple Airpod" />

            <label htmlFor="">Instock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZTpB9OAPdZDD4meEdWRLaDGd9r0NAB5kWg&usqp=CAU"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                name=""
                id="file"
                style={{ display: "none" }}
              />
            </div>

            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
