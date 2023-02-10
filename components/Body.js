import { card } from "../constants";
import Restaurantcard from "./RestaurantCard";
import React, { useState, useEffect } from "react";

function filterData(restaurants, searchtxt) {
  const filterdata = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchtxt.toLowerCase())
  );
  return filterdata;
}

const Body = () => {
  // let searchtxt = "KFC";
  const [searchtxt, setSearchText] = useState("");
  // const [searchClicked, setSearchClicked] = useState("false");

  const [restaurants, setRestaurants] = useState(card);

  useEffect(() => {
    setRestaurants(card);
  }, [searchtxt]);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="searchInput"
          placeholder="search"
          value={searchtxt}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="submit-btn"
          onClick={() => {
            // searchClicked === "true"
            //   ? setSearchClicked("false")
            //   : setSearchClicked("true");

            const data = filterData(restaurants, searchtxt);
            setRestaurants(data);
          }}
        >
          Submit
        </button>
      </div>
      <div className="restaurant-lists">
        {
          restaurants.map((restaurant) => {
            return (
              <Restaurantcard {...restaurant.data} key={restaurant.data.id} />
            );
          })

          /* { <Restaurantcard restaurant={...card[0].data} />
        <Restaurantcard restaurant={...card[1].data} />
        <Restaurantcard restaurant={...card[2].data} />
        <Restaurantcard restaurant={...card[3].data} />
        <Restaurantcard restaurant={...card[4].data} />
        <Restaurantcard restaurant={...card[5].data} />
        <Restaurantcard restaurant={...card[6].data} />
        <Restaurantcard restaurant={...card[7].data} />
        <Restaurantcard restaurant={...card[3].data} />
        <Restaurantcard restaurant={...card[4].data} />} */
        }
      </div>
    </>
  );
};
export default Body;
