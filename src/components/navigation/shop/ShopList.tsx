import React, { useState } from "react";
import classes from "./ShopList.module.css";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../ui/modal/Modal";
import { uiActions } from "../../../redux/slices/uiSlice";
import ShopItem from "./ShopItem";

import { RootState } from "../../../redux/store";
const ShopList = () => {
  const ShopDataList = useSelector((state: RootState) => state.user.shop);

  const dispatch = useDispatch();
  const isShopListOpen = useSelector(
    (state: RootState) => state.ui.isShopListOpen
  );

  const shopListStateHandler = (payload: boolean) => {
    dispatch(uiActions.ChangeShopListState(payload));
  };
  return (
    <React.Fragment>
      <CSSTransition
        in={isShopListOpen}
        timeout={100}
        classNames="shop"
        mountOnEnter
        unmountOnExit
      >
        <div className={"animateContainer"}>
          <div className={classes.list}>
            <h4>Cart</h4>
            <hr className={classes["list__line"]} />
            <ul className={classes["list__unordered"]}>
              {ShopDataList.map((item) => {
                return <ShopItem key={item.productId} item={item} />;
              })}
            </ul>
          </div>
        </div>
      </CSSTransition>

      {isShopListOpen && (
        <div
          onClick={shopListStateHandler.bind(undefined, false)}
          className={classes.backdrop}
        ></div>
      )}
    </React.Fragment>

    // <Modal onClose={shopListStateHandler} >

    // <h1 className={classes.list}>test</h1>
    // </Modal>
  );
};

export default ShopList;
