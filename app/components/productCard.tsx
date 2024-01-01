import Image from 'next/image'
import styles from '../styles/product.module.css'

export default function ProductCard(){
    return(
        <div className={styles.product_card}>
            <Image
            src='/assets/bettas/avatar.jpeg'
            width={500}
            height={500}
            className={styles.image}
            alt='error'
            />
            <h1 className={styles.product_card_title}>asd</h1>
        </div>
    )
}