import Image from 'next/image'
import Container from '../components/aboutUsContainer'
import styles from '../styles/aboutUs.module.css'
import { title } from 'process'

export default function AboutUs(){

    const descriptions = ['Discover a world of beauty and elegance at AquaFins, your go-to betta fish store. Immerse yourself in a captivating aquatic experience as you explore our vast selection of bettas, carefully curated to meet the needs of passionate hobbyists like yourself.',
    'Discover the unparalleled beauty of bettas at AquaFins. Our store boasts a diverse selection of betta variants, each more enchanting than the last. Whether you\'re drawn to the vibrant hues of our Halfmoon bettas, the elegance of our Crowntails, or the intricate patterns of our Plakats, AquaFins has the perfect betta to suit your preferences',
    'Immerse yourself in the beauty of bettas that embody the excellence of Thai breeding practices. Our bettas boast vibrant colors, intricate fin patterns, and robust health – characteristics that define the superior quality for which Thai bettas are renowned worldwide.']

    const titles = ['Our Story', 'Our Collection', 
                    'Finest Quality']

    const imagePaths = ['store.jpg', 'betta.jpeg',
                        'thailand_quality.jpeg']

    return(
        <div className={styles.about_us_container}>
            <h1 className={styles.title_container}>About Us</h1>
            <div className={styles.information_container}>
                {
                    titles.map((title, index) => (
                        <Container key={index} index={index} title={title} desc={descriptions[index]} imagePath={imagePaths[index]}/>
                    ))
                }
            </div>
            <Image
            src='/assets/red_halfmoon.png'
            width={500}
            height={500}
            className={styles.betta_fish}
            alt='error'>

            </Image>
        </div>
    )
}