import styles from '../styles/product.module.css'
import ProductCard from './productCard'

export default function ProductContainer(){
    return(
        <div className={styles.container}>
            <h1 className={styles.product_category_title}>Betta Supplies</h1>
            <div className={styles.product_card_container}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}