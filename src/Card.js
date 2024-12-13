import React from "react";
import { faWonSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log("item", item);
  return (
    <li>
      <Link to={`/product/${item.id}`}>
        <img src={`${process.env.PUBLIC_URL}/img/${item.img}`} />

        <h5>{item.title}</h5>
        <p>{item.content}</p>
        <p>
          <FontAwesomeIcon icon={faWonSign} /> {item.price}원
        </p>
      </Link>
    </li>
  );
};

export default Card;
