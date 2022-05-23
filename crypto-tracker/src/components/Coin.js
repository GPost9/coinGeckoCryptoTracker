import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "../styles/Coin.css";

const Coin = ({
  id,
  image,
  name,
  currentPrice,
  totalVolume,
  priceChange,
  marketCap,
  sparkline,
}) => {

  return (
    
      <div className="container">
        <div className="row">
          <div className="coinInfo">
            <img src={image} alt="coin icon" />
            <h3>{name}</h3>
          </div>
          <div className="data">
            <p className="currentPrice">${currentPrice.toLocaleString()}</p>
            <p className="totalVolume">${totalVolume.toLocaleString()}</p>

            {priceChange < 0 ? (
              <p className="percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="percent green">{priceChange.toFixed(2)}%</p>
            )}

            <p className="marketCap">${marketCap.toLocaleString()}</p>

            
              <Sparklines data={sparkline} svgWidth={100} svgHeight={20}>
                {
                  sparkline[0] > sparkline[sparkline.length - 1] || sparkline[0] === sparkline[sparkline.length-1] ? (
                    <SparklinesLine style={{ fill: "none", strokeWidth: 3 }} color="red" />
                  ) : (
                    <SparklinesLine style={{ fill: "none", strokeWidth: 3 }} color="green" />
                  )
                }
              </Sparklines>
          
          </div>
        </div>
      </div>
    
  );
};

export default Coin;
