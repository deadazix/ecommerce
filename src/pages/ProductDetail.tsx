import React from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/product/detail/Detail";
import Slider from "../components/product/slider/Slider";

const ProductDetail: React.FC = (props) => {
  const {id} = useParams();
  console.log(id);
  return (
    <main>
      <Slider />
      <Detail />
    </main>
  );
};

export default ProductDetail;
