import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import CoinList from "./components/CoinList";
import Coin from "./components/Coin";

const App = () => {
  // const [coins, setCoins] = useState([]);
  // const [query, setQuery] = useState("");
  // const [sparkline, setSparkline] = useState([])

  // useEffect(() => {
  //   const getCoins = async () => {
  //     await axios
  //       .get(
  //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
  //       )
  //       .then((res) => {
  //         // let sparklineData = res.data.map((coin) => coin.sparkline_in_7d.price)
  //         setCoins(res.data);
  //         // setSparkline(sparklineData)
  //         console.log("this is the coins data: ", res.data)
  //         // console.log("this is the sparkline data: ", sparklineData)
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //   getCoins();
  // }, []);

  // const handleChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const filterCoins = coins.filter((coin) => coin.name.toLowerCase().indexOf(query.toLowerCase()) > -1);

  // const formattedSparkline = sparkline.map((item) => Math.floor(item))

  return (
    <div className="App">
      <CoinList />
      {/* <Router>
        <Route path="/" element={<CoinList />} />
      </Router> */}
    </div>
  );
};

export default App;
