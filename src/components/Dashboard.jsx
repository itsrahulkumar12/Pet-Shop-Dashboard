import React, { useEffect, useState } from "react";
import DashboardContent from "./DashboardContent";
import Services from "./Services";
import Pets from "./Pets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showDashboard, setShowDashboard] = useState(true);
  const [showPets, setShowPets] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(()=>{
    
  },[])

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className="dashboard">
      <section className="dashboard-sidebar-container">
        <div className="dashboard-sidebar">
          <div className="sidebar-header">
            <h3>PET VET. SHOP</h3>
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
            > <span style={{marginRight:15}}><i class="fa-solid fa-table-columns"></i></span>
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
                <span style={{marginRight:15}}><i class="fa-solid fa-dog"></i></span>
              Pets
            </li>
            <li
              onClick={() => {
                setShowPets(false);
                setShowServices(true);
                setShowDashboard(false);
              }}
              style={{backgroundColor: showServices && '#DC2265'}}
            ><span style={{marginRight:15}}><i class="fa-solid fa-briefcase-medical"></i></span>
              Services
            </li>
          </ul>
        </div>
      </section>

      <section className="dashboard-content">
        <header className="dashboard-content-header">
          <h4 style={{ fontSize: "30px" }}>Dashboard</h4>
          <div style={{display:'flex', justifyContent:'center', marginLeft:10}}>
          <h5 onClick={()=> navigate('/')} className="dashboard-home-btn">Home</h5>
          <h5 onClick={()=> logout()} className="dashboard-home-btn">Logout</h5>
          </div>
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
