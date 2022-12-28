import React from "react";
import "./newuser.scss";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" id="" placeholder="Junior" />
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Junior Wahab" />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Jnrwahab@gmail.com" />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+233 558708343" />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Accra | Ghana" />
        </div>

        <div className="newUserItem">
          <div className="newUserGender">
            <label>Gender</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="navUserItem">
          <label>Active</label>
          <select name="active" className="userSelect" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
