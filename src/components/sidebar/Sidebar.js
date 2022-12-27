import React from "react";
import "./sidebar.scss";
import {
  LineStyle,
  TrendingUp,
  Timeline,
  Person,
  Storefront,
  AttachMoney,
  Leaderboard,
  Mail,
  Message,
  Chat,
  Work,
  Report,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Dashboard</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Quick Menu</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Person className="sidebarIcon" /> Users
            </li>

            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>

            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>

            <li className="sidebarListItem">
              <Leaderboard className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Notifications</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Mail className="sidebarIcon" />
              Mail
            </li>

            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              Feedback
            </li>

            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Staff</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Work className="sidebarIcon" />
              Manage
            </li>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>

            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
