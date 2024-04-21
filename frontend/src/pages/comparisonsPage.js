
import React from "react";
import Navigation from "../compoents/navigation";
import '../styles/App.css';
import BankComparisonServicePlot from "../compoents/bankComparisonService";
import NPSScoreByBankPlot from "../compoents/npsScoreByBank";
import BankComparisonIssuePlot from "../compoents/bankComparisonbyIssue";
import GXSTable from "../compoents/gxsTable";
import TrustTable from "../compoents/trustTable";
import WhatIfNPSPlot from "../compoents/whatIfBankNPS";
import data from "../serv_issue_rec.json";
import Plot from 'react-plotly.js';

const ComparisonPage = () => {
  const lastEntry = data[data.length - 1];
  const columns = ["Service", "Issue", "Recommendation"];
    return (
        <div>
            <Navigation/>
            <h1 style = {{marginTop:'15vh'}}>How does GXS stand against Trust?</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1vw', marginTop: '7vh' }}>
        <div style={{marginTop:'8vh',marginLeft:'0.5vw'}}>
          <h2 style={{ color: '#6237A0', fontSize: '2.5vw',marginTop:'2vh' }}>Our Recommedation</h2>
          <Plot
            data={[
              {
                type: 'table',
                columnwidth: [300, 300, 1000],
                header: {
                  values: columns.map(col => col.toUpperCase()),
                  align: ['center'],
                  line: { width: 1, color: 'white' },
                  fill: { color: '#28104E' },
                  font: { family: 'Arial', size: 12, color: 'white' }
                },
                cells: {
                  values: columns.map((column) => lastEntry[column.toLowerCase()]),
                  align: ['left'],
                  line: { color: 'white', width: 1 },
                  fill: { color: ['rgb(25,25,26)'] },
                  font: { family: 'Arial', size: 11, color: ['white'] },
                  height: 100 // Set cell height for each review
                }
              }
            ]}
            layout={{
              width: 600,
              height: 130,
              plot_bgcolor: 'rgb(25,25,26)',
              paper_bgcolor: 'rgb(25,25,26)',
              font: { color: 'white' },
              margin: { l: 0, r: 0, b: 0, t: 0 } // Set margin to 0
            }}
          />
        </div>
        <div style={{marginLeft:'12vw'}}>
          <WhatIfNPSPlot />
        </div>
      </div>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1vw',marginTop:'7vh',marginLeft:'-4vw'}}>
    <div>
      <NPSScoreByBankPlot />
    </div>
    <div style={{marginTop:'-24vh'}}>
      <BankComparisonServicePlot />
    </div>
      <div style={{marginTop:'-6.5vh'}}>
    <BankComparisonIssuePlot/>
    </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between',marginLeft:'2vw',marginTop:'-10vh'}}>
      <div style={{ flex: 1}}>
        <p style={{color:'#6237A0',fontSize:'2.5vw'}}><strong>GXS</strong></p>
        <GXSTable />
      </div>
      <div style={{ flex: 1}}>
        <p style={{color:'#9754CB',fontSize:'2.5vw'}}><strong>Trust</strong></p>
        <TrustTable />
      </div>
    </div>
      
  </div>
)}

export default ComparisonPage;