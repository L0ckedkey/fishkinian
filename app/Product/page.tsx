import ProductContainer from '../../components/productContainer'
import styles from '../styles/product.module.css'

export default function Product(){
    return (
       <div className={styles.product_container_parent}>
            <h1 className={styles.title_container}>Product</h1>
            <div className={styles.product_container}>
                <ProductContainer/>
                <ProductContainer/>
                <ProductContainer/>
            </div>
       </div>
    )
}