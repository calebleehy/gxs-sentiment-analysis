import React from "react";
import Navigation from "../compoents/navigation";
import '../styles/App.css';
import ServiceCountsPlot from '../compoents/serviceCounts';
import IssueCountsPlot from '../compoents/issueCounts';
import NPSScorePlot from '../compoents/npsScore';
import BankNPSPlot from '../compoents/bankNPS';
import TopRecommendationsPlot from "../compoents/topRecommendations";
import GaugeChart from "../compoents/gauge";

const DashBoardPage = () => {
  return (
    <div>
      <Navigation />
      <h1>What are the most impactful areas to be addressed?</h1>
      <div className="dashboard">
        <div className = "row">
          <div style= {{ marginLeft:'50px'}}>
          <NPSScorePlot />
          </div>
        
        <div style={{ marginLeft:'100px',marginTop:'100px' }}>
        <ServiceCountsPlot />
        </div>   
        </div>      
          <div className = "row">
          <BankNPSPlot />
          <div style= {{marginLeft:'100px'}}>
          <IssueCountsPlot />

          </div>     
        </div>
      </div>
      <div className="row" style={{ display: 'flex' }}>
          <div style={{ flex: 1}}>
            <TopRecommendationsPlot />
          </div>
          <div style={{ flex: 1}}>
            <GaugeChart />
          </div>
        </div>
    </div>
  );     
}

export default DashBoardPage;