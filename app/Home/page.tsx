import Slider from "../components/banner";
import styles from '../styles/home.module.css'

export default function Home() {
  return(
   <div className={styles.home_container}>
      <h1 className={styles.title_container}>Home</h1>
      <Slider/>
   </div>
  )
}
