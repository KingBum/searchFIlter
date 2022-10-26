import React, { useContext } from "react";
import styles from "./product.module.css"
import { Context } from "../../Context";


export default function Product({product}) {
  const stocked = product.stocked
  const { setItems } = useContext(Context);
      
    const handleCount = () => {
        setItems((prevcount) => prevcount + 1);
    };
  return (
    <div className={styles.product}>
        <img className={styles.img} src={product.img} alt="" />
        <div className={styles.box}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.bottom}>
            <div className={styles.price}>{product.price}</div>
            {stocked ? <div onClick={handleCount} className={styles.order}>Thêm vào giỏ hàng</div> : <></>}
          </div>
          {stocked ? <></> : <div className={styles.unOrder}>Tạm hết hàng</div>}
        </div>
    </div>
  )
}
