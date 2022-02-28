import React from "react";

const Coin = ({
  image,
  name,
  symbol,
  currentPrice,
  totalVolume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="coinInfo">
          <img src={image} alt="coin icon" />
          <h1>{name}</h1>
          <p className="symbol">{symbol}</p>
        </div>
        <div className="data">
          <p className="price">${currentPrice}</p>
          <p className="volume">${totalVolume}</p>

          {priceChange < 0 ? (
            <p className="percent red">{priceChange.toFixed(2)}</p>
          ) : (
            <p className="percent green">{priceChange.toFixed(2)}</p>
          )}

          <p className="marketCap">{marketCap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
