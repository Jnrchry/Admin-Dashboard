import React from "react";
import "./user.scss";
import Model from "../../assets/img/model-1.jpg";
import { PermIdentity } from "@mui/icons-material";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={Model} alt="" className="userShowImg" />

            <div className="userShowTopTitle">
              <span className="userShowUserName">Junior Wahab</span>
              <span className="userShowUserTitle">Frontend Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <PermIdentity />
            <span className="userShowInfoTitle">jnrwahab99</span>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
};

export default User;
