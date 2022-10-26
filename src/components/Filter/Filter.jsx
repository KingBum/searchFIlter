import React, { useRef } from "react";
import { useState } from "react";
import product from "../../product";
import Category from "../Category/Category";
import styles from "./filter.module.css";

export default function Filter() {
  const [query, setQuery] = useState("");
  const [listItem, setListItem] = useState(product)
  const [checkBox, setCheckBox] = useState(false)
  const checkbox = useRef();
  const render = listItem
    .filter((asd) => asd.title.toLowerCase().includes(query))
    .map((item) => item);
  const handleCheck = () => {
    !checkBox ? setListItem(listItem.filter(item => item.stocked === true)) : setListItem(product)
    setCheckBox(!checkBox)
  } 
  return (
    <>
      <div className={styles.filter}>
        <input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          className={styles.search}
          type="text"
          placeholder="Tim kiem ..."
        />
        <div className={styles.box}>
          <input
            ref={checkbox}
            id="check"
            className={styles.checkbox}
            type="checkbox"
          />
          <label onClick={handleCheck} htmlFor="check">Chỉ hiển thị sản phẩm còn trong kho</label>
        </div>
      </div>
      <div className="list">
      <Category title="Điện thoại Smartphone" cate="a1" pro={render}/>
      <Category title="Thiết bị số" cate="a2" pro={render}/>
      <Category title="Thiết bị gia đình" cate="a3" pro={render}/>
      </div>
    </>
  );
}
