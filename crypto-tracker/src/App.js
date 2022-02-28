import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

const App = () => {
  const [coins, setCoins] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const getCoins = async () => {
      await axios
              .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true")
              .then((res) => {
                setCoins(res.data)
                console.log(res.data)
              })
              .catch((error) => alert(error))
    }

    getCoins()
  }, [])

  const handleChange = (event) => {
    setQuery(event.target.value)
  } 

  const filterCoins = coins.filter((coin) => 
    coin.name.toLowerCase().indexOf(query.toLowerCase()) > -1
  )


  return (
    <div className="App">
      <div className="search">
        <h1 className="searchText">Search a Coin</h1>
        <form>
          <input 
            className="searchInput" 
            type="text" 
            placeholder="search" 
            onChange={handleChange}
          />
        </form>
      </div>

      {filterCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            currentPrice={coin.current_price}
            totalVolume={coin.totalVolume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
            />


        )
      })}
    </div>
  );
};

export default App;
