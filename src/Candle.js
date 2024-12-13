import React from "react";
import data from "./data";
import Card from "./Card";
const Candle = () => {
  const items = data.filter((item) => {
    return item.list === "k";
  });
  console.log(items);
  const firstItems = items.slice(0, 4);
  const lastItems = items.slice(4);
  console.log("first", firstItems);
  console.log("last", lastItems);
  return (
    <div className="con">
      {/* <ul className="contents">
        {items.map((item) => {
          return <Card item={item} />;
        })}
      </ul> */}
      <img
        src={`${process.env.PUBLIC_URL}/img/doterra1.jpg`}
        className="banner"
      />
      <h3>캔들</h3>
      <ul className="contents">
        {firstItems.map((item) => {
          return <Card item={item} />;
        })}
      </ul>
      <img
        src={`${process.env.PUBLIC_URL}/img/doterra2.jpg`}
        className="banner"
      />
      <ul className="contents2">
        {lastItems.map((item) => {
          return <Card item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Candle;
