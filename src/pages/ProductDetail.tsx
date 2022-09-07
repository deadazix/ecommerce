import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/slices/productSlice";
import { uiActions } from "../redux/slices/uiSlice";
import { RootState } from "../redux/store";
const ProductDetail: React.FC = (props) => {
  const productState = useSelector(
    (state: RootState) => state.ui.productStatus
  );
  const product = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  console.log(productState);

  return (
    <div>
      {product.name}
    </div>
  );
};

export default ProductDetail;
