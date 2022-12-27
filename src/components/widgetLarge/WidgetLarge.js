import React from "react";
import "./widgetlarge.scss";
import Model from "../../assets/img/model-1.jpg";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={Model} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Adjei</span>
          </td>
          <td className="widgetLargeDate">31st Dec,2022</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={Model} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Adjei</span>
          </td>
          <td className="widgetLargeDate">31st Dec,2022</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={Model} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Adjei</span>
          </td>
          <td className="widgetLargeDate">31st Dec,2022</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={Model} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Adjei</span>
          </td>
          <td className="widgetLargeDate">31st Dec,2022</td>
          <td className="widgetLargeAmount">$122.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
