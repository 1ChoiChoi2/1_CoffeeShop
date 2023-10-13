import React from "react";
import { useParams } from "react-router-dom";

const DishDetail = () => {
  const { id } = useParams();
  console.log(id)

  return <div>Hello World</div>;
};

export default DishDetail;
