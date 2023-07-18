import React from 'react'
import Card from "./Card";
import GraphCard from "./GraphCard";
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";
import graph3 from "../assets/graph3.png";

const DashboardContent = () => {
  return (
    <div>
        <div className="analytics-cards">
          <Card
            heading={`Today's Money`}
            amount={"₹25,000"}
            color1={"#404047"}
            color2={"#1C1C1C"}
            period={"week"}
            growth={"+55%"}
            positive={true}
            icon={'fa-solid fa-indian-rupee-sign'}
          />
          <Card
            heading={`Today's Users`}
            amount={"2,300"}
            color1={"#E83975"}
            color2={"#DC2265"}
            period={"month"}
            growth={"+3%"}
            positive={true}
            icon={'fa-solid fa-users'}
          />
          <Card
            heading={`New Clients`}
            amount={"900"}
            color1={"#5EB562"}
            color2={"#4AA64E"}
            period={"month"}
            growth={"-2%"}
            positive={false}
            icon={'fa-solid fa-user'}
          />
          <Card
            heading={`Total Sales`}
            amount={"₹2.5L"}
            color1={"#3F99EF"}
            color2={"#237CEA"}
            period={"month"}
            growth={"+5%"}
            positive={true}
            icon={'fa-sharp fa-solid fa-money-bill-trend-up'}
          />
        </div>
        <section className="graph-section">
          <GraphCard color1={"#E83975"} color2={"#DC2265"} image={graph1} heading={'Website Views'} />
          <GraphCard color1={"#5EB562"} color2={"#4AA64E"} image={graph2} heading={'Daily Sales'} />
          <GraphCard color1={"#404047"} color2={"#1C1C1C"} image={graph3} heading={'Completed Tasks'} />
        </section>
    </div>
  )
}

export default DashboardContent