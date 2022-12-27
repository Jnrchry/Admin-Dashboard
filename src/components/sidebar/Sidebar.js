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
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Dashboard</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to="/">
                <LineStyle className="sidebarIcon" />
                Home
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/analytics">
                <Timeline className="sidebarIcon" />
                Analytics
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/sales">
                <TrendingUp className="sidebarIcon" />
                Sales
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Quick Menu</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Link to="/users">
                <Person className="sidebarIcon" /> Users
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/products">
                <Storefront className="sidebarIcon" />
                Products
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/transactions">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/reports">
                <Leaderboard className="sidebarIcon" />
                Reports
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Notifications</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/mail">
                <Mail className="sidebarIcon" />
                Mail
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/feedback">
                <Chat className="sidebarIcon" />
                Feedback
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/messages">
                <Message className="sidebarIcon" />
                Messages
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h6 className="sidebarTitle">Staff</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Link to="/manage">
                <Work className="sidebarIcon" />
                Manage
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/analytics">
                <Timeline className="sidebarIcon" />
                Analytics
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/reports">
                <Report className="sidebarIcon" />
                Reports
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
