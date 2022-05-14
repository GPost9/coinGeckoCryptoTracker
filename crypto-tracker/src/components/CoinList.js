import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "../styles/CoinList.css";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCoins = async () => {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
        )
        .then((res) => {
          // let sparklineData = res.data.map((coin) => coin.sparkline_in_7d.price)
          setCoins(res.data);
          // setSparkline(sparklineData)
          console.log("this is the coins data: ", res.data);
          // console.log("this is the sparkline data: ", sparklineData)
        })
        .catch((error) => console.log(error));
    };

    getCoins();
  }, []);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const filterCoins = coins.filter(
    (coin) => coin.name.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
  return (
    <div className="listContainer">
      <div className="search">
        <form>
          <input
            className="input"
            type="text"
            placeholder="Search a Coin"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="headerContainer">
        <p className="coinLabel">Coin</p>
        <p className="priceLabel">Price</p>
        <p className="volumeLabel">Total Volume</p>
        <p className="priceChangeLabel">Price Change</p>
        <p className="marketCapLabel">Market Cap</p>
        <p className="weekTrendLabel">Last Seven Days</p>
      </div>

      {filterCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            image={coin.image}
            name={coin.name}
            currentPrice={coin.current_price}
            totalVolume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
            sparkline={coin.sparkline_in_7d.price.map((item) =>
              Math.floor(item)
            )}
          />
        );
      })}
    </div>
  );
};

export default CoinList;
