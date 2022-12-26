import React from "react";
import "./topbar.scss";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import avatar from "../../assets/img/model-1.jpg";

const topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ColourBurstsGH</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img src={avatar} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default topbar;
