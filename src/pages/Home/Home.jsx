import React from "react";
import Cart from "../../components/Cart/Cart";
import styles from "./home.module.css"
import Filter from "../../components/Filter/Filter";

export default function Home() {
  return (
    <div className={styles.home}>
      <Cart />
      <Filter/>
    </div>
  );
}
