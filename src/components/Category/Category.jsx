import React from 'react'
import styles from "./category.module.css"
import Product from "../Product/Product"

export default function Category({title, cate, pro}) {
  return (
    <div className={styles.category}>
      <div className={styles.title}>{title}</div>
      <div className={styles.items}>
        {pro.filter((item) => (
          item.cate === cate
        )).map(i => (
          <Product key={i.title} product={i}/>
        ))}
      </div>
    </div>
  )
}
