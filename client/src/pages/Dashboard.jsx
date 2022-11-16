import React from "react";
import DashboardCards from "../components/DashboardCards";
import "../styles/Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className={`${props.showMobile ? "py-3" : "p-5"}`}>
      <DashboardCards
        showMobile={props.showMobile}
        isStudent={props.isStudent}
        isClass={props.isClass}
        isSubject={props.isSubject}
      />
    </div>
  );
};

export default Dashboard;
