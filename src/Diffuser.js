import React from "react";
import Card from "./Card";
import data from "./data";

const Diffuser = () => {
  const DiffuserItems = data.filter((diffuser) => {
    return diffuser.list == "d";
  });
  console.log(DiffuserItems);

  const firstItems = DiffuserItems.slice(0, 4);
  const lastItems = DiffuserItems.slice(4);
  return (
    <div className="con">
      <img src={`${process.env.PUBLIC_URL}/img/doterra1.jpg`} />
      <h3>디퓨저</h3>

      <ul className="contents">
        {firstItems.map((item) => {
          return <Card item={item} />;
        })}
      </ul>
      <div className="banner">
        <img src={`${process.env.PUBLIC_URL}/img/doterra1.jpg`} />
      </div>
      <ul className="contents">
        {lastItems.map((item) => {
          return <Card item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Diffuser;
