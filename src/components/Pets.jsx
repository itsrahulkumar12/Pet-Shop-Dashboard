import React, { useState } from "react";
import { petdata } from "../data/petdata";

const Pets = () => {
  const [data, setData] = useState(petdata);
  console.log("PET DATA", data);
  return (
    <div className="pet-category">
      <div className="pet-category-header">
        <h3>Pets Info</h3>
      </div>
      <div className="pet-info-container">
        <div className="pet-info pet-info1">
          <h5 style={{flex:0.2}}>Pet Name</h5>
          <h5 style={{flex:0.3}}>Customer Name</h5>
          <h5 style={{flex:0.4}}>Customer Email</h5>
          <h5 style={{flex:0.2}}>Treatment</h5>
          <h5 style={{flex:0.2}}>Action</h5>
        </div>
        {data.map((item) => (
          <React.Fragment key={item.id}>
          <div key={item.id} className="pet-info pet-info2" >
            <h5 style={{flex:0.2}}>{item.petName}</h5>
            <h5 style={{flex:0.3}}>{item.customerName}</h5>
            <h5 style={{flex:0.4}}>{item.email}</h5>
            <h5 style={{flex:0.2}}>In Process</h5>
            <h5 style={{flex:0.2}}>Edit</h5>
          </div>
          <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Pets;
