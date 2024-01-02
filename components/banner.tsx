import Image from 'next/image'
import styles from '../app/styles/home.module.css'

export function Banner(){
    return(
        <div className={styles.banner_container}>
            <Image
            src='/assets/banner/shrimp_tank.jpeg'
            width={500}
            height={500}
            className={styles.banner}
            alt='error'
            />
            <div className={styles.banner_information_container}>
                <h1 className={styles.banner_title}>
                    Shrimp Deals
                </h1>
                <a className={styles.banner_button}>
                    Click Here
                </a>
            </div>
        </div>
    )
}

export default function Slider(){
    return(
        <div className={styles.slider_container}>
            <Banner/>
        </div>
    )
}