import React, { useContext } from "react";
import { Context } from "../../Context";
import styles from "./cart.module.css"

export default function Cart() {
  const { items } = useContext(Context);
  return (
    <div className={styles.cart}>
        <div className={styles.count}>(
          <span className={styles.number}>{items}</span>
        )</div>
        <div className={styles.cart}>Cart</div>
    </div>
  )
}
