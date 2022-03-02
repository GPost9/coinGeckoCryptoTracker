import React from "react";
import Sparkline from "./Sparkline";
import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
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
          <p className="symbol">{symbol}</p>
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
          {/* <Sparkline lineData={sparkline}/> */}
        </div>
      </div>
    </div>
  );
};

export default Coin;
