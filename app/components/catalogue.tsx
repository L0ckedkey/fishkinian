import Image from 'next/image'
import styles from '../styles/fishCatalogue.module.css'

interface CatalogueProps{
    index: number;
    title: string;
    link: string;
    imagePath: string;
    isLinkAvailable: boolean;
}

const Catalogue: React.FC<CatalogueProps> = ({ index, title, link, imagePath, isLinkAvailable }) => {
    return (
        <div className={styles.catalogue}>
            <Image
             src={'/assets/bettas/' + imagePath + '.jpeg'}
             width={500}
             height={500}
             className={styles.image}
             alt='error'/>
             <h1 className={styles.title}>{title}</h1>
             {isLinkAvailable ? <a href={link} className={styles.button} target='_blank'>Click Here !</a> : <></>}
        </div>
    )
}

export default Catalogue