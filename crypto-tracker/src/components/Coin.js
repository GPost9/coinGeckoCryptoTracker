import React, { useState, useEffect } from "react";
import axios from "axios";
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
  // const [coin, setCoin] = useState({});
  // const [lineData, setLineData] = useState([])

  // const url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  // const config = {
  //   url,
  //   headers: {
  //    'Access-Control-Allow-Origin' : '*',
  //    'Access-Control-Allow-Methods':'GET',
  //   }
  // }

  // useEffect(() => {
  //   const getCoin = async () => {
  //     await axios(config)
  //             .then((res) => {
  //               // setCoin(res.data)
  //               const sparkline = res.data.market_data.sparkline_7d.price
  //               setLineData(sparkline)
  //               console.log("this is the sparkline data ", sparkline)
  //             })
  //             .catch((error) => console.log(error))
  //   }
  //   getCoin()
  // }, [])

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
