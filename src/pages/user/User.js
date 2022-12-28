import React from "react";
import "./user.scss";
import Model from "../../assets/img/model-1.jpg";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

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

            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">jnrwahab99</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.05.1995</span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+233 548708343</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">jnrwahab@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Accra | Ghana</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="uswerUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name=""
                  className="userUpdateInput"
                  placeholder="juniorwahab99"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name=""
                  className="userUpdateInput"
                  placeholder="Junior Wahab"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name=""
                  className="userUpdateInput"
                  placeholder="jnrwahab@gmail.com"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name=""
                  className="userUpdateInput"
                  placeholder="+233 558708343"
                />
              </div>

              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name=""
                  className="userUpdateInput"
                  placeholder="Accra | Ghana"
                />
              </div>
            </div>
            <div className="uswerUpdateRight">
              <div className="userUpdateUpload">
                <img src={Model} alt="" className="userUpdateImg" />

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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
