import React, { useState } from "react";
import DashboardContent from "./DashboardContent";
import Services from "./Services";
import Pets from "./Pets";

const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showPets, setShowPets] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <div className="dashboard">
      <section className="dashboard-sidebar-container">
        <div className="dashboard-sidebar">
          <div className="sidebar-header">
            <h3>PET SHOP</h3>
          </div>
          <hr />
          <ul>
            <li
              onClick={() => {
                setShowDashboard(true);
                setShowServices(false);
                setShowPets(false);
              }}
              style={{backgroundColor: showDashboard && '#DC2265'}}
            >
              Dashboard
            </li>
            <li
              onClick={() => {
                setShowPets(true);
                setShowServices(false);
                setShowDashboard(false);
              }}
              style={{backgroundColor: showPets && '#DC2265'}}
            >
              Pets
            </li>
            <li
              onClick={() => {
                setShowPets(false);
                setShowServices(true);
                setShowDashboard(false);
              }}
              style={{backgroundColor: showServices && '#DC2265'}}
            >
              Services
            </li>
          </ul>
        </div>
      </section>

      <section className="dashboard-content">
        <header className="dashboard-content-header">
          <h4 style={{ fontSize: "30px" }}>Dashboard</h4>
          <h5 className="dashboard-home-btn">Home</h5>
        </header>
        <hr />

        {showDashboard && <DashboardContent />}

        {showPets && <Pets />}

        {showServices && <Services />}
      </section>
    </div>
  );
};

export default Dashboard;
