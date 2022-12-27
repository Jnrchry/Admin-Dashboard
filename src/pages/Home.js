import React from "react";
import "./home.scss";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import Chart from "../components/chart/Chart";
import { userdata } from "../components/data";
import WidgetLarge from "../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../components/widgetSmall/WidgetSmall";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userdata} title="User Analytics" grid dataKey="ActiveUser" />
      <div className="homeWidget">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
