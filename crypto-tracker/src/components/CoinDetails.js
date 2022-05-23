import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "./HistoryChart";
import CoinData from "./CoinData";
import coinGecko from "../api/coinGecko";
import axios from "axios";

const CoinDetails = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)  
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
        )
        .then((res) => {
          setCoinData(res.data);
          console.log("These are the coin prices: ", res.data.prices);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
    setIsLoading(false)
  }, []);

  const renderData = () => {
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
      <div className="coinDetails">
        <HistoryChart />
      </div>
    )
  };

  return renderData();
};

export default CoinDetails;
