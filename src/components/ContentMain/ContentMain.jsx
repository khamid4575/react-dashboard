import {
  Budget,
  Card,
  Transactions,
  Report,
  Subscriptions,
  Savings,
  Loans,
  Financial,
} from "../index";
import "./ContentMain.css";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Card />
        <Transactions />
        <Report />
      </div>

      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscriptions />
            <Savings />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
