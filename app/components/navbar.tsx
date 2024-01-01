import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import Menu from './menu'

export default function Navbar(){
    return (
        <div className={styles.navbar_container}>
            <div className={styles.logo_container}>
                <Image 
                src='/assets/logo.jpg'
                width={100}
                height={100}
                className={styles.logo}
                alt='error'/>
            </div>
            <div className={styles.menu_container}>
                <Menu icon='home' title='Home' location='Home'/>
                <Menu icon='inventory_2' title='Product' location='Product'/>
                <Menu icon='sailing' title='Fish Catalogue' location='FishCatalogue'/>
                <Menu icon='store' title='About Us' location='AboutUs'/>
                <Menu icon='call' title='Contact' location='/'/>
            </div>
        </div>
    )
}