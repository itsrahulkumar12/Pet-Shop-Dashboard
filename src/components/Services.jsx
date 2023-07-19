import React from "react";
import DashboardServiceCard from "./DashboardServiceCard";
import wash from "../assets/wash.jpg";
import selfserve from "../assets/selfserve.jpg";
import grooming from "../assets/cutting.jpg";
import nailcutting from "../assets/nailcutting.jpg";

const Services = () => {
  return (
    <div className="pet-category">
      <div className="pet-category-header">
        <h3>SERVICES</h3>
      </div>
      <div className="dashboard-services-container">
        <DashboardServiceCard
          image={wash}
          heading={"Wash & Blow Dry"}
          desc={
            'Indulge your pets with our "Wash & Dry" service at the veterinary shop - expert grooming and premium products for a stress-free, happy experience.'
          }
          time={"30min"}
          price={"800"}
        />
        <DashboardServiceCard
          image={selfserve}
          heading={"Self Serve Dog Wash"}
          desc={
            'Indulge your pets with our "Self Serve Dog Wash" service at the veterinary shop - expert grooming and premium products for a stress-free, happy experience.'
          }
          time={"1hour"}
          price={"1000"}
        />
        <DashboardServiceCard
          image={grooming}
          heading={"Full Grooming"}
          desc={
            'Indulge your pets with our "Full Grooming" service at the veterinary shop - expert grooming and premium products for a stress-free, happy experience.'
          }
          time={"2hour"}
          price={"2500"}
        />
        <DashboardServiceCard
          image={nailcutting}
          heading={"Nail Cutting"}
          desc={
            'Indulge your pets with our "Nail Cutting" service at the veterinary shop - expert grooming and premium products for a stress-free, happy experience.'
          }
          time={"15min"}
          price={"500"}
        />
        
      </div>
    </div>
  );
};

export default Services;
