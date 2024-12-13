import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ data }) => {
  const { id } = useParams();
  console.log("id", id);
  console.log(data);
  const product = data.find((item) => {
    return item.id === parseInt(id);
  });
  console.log("pro", product);
  return (
    <div className="product-detail">
      <img src={`${process.env.PUBLIC_URL}/img/${product.img}`} />
      <div className="product">
        <h4>{product.title}</h4>
        <p>{product.content}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Detail;
