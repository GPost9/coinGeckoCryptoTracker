import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCoins = async () => {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
        )
        .then((res) => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch((error) => alert(error));
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
    <div className="App">
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
      </div>

      {filterCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            currentPrice={coin.current_price}
            totalVolume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
};

export default App;
