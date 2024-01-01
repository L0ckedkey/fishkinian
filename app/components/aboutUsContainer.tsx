import Image from 'next/image';
import styles from '../styles/aboutUs.module.css';
import { MenuProps } from '@nextui-org/react';

interface aboutUsContainerProps{
    index: number;
    title: string;
    desc: string;
    imagePath: string;
}


const Container: React.FC<aboutUsContainerProps> = ({ index, title, desc, imagePath }) => {
  const isRight = index % 2 === 0;

  return (
    <div className={styles.container}>
      {isRight ? (
        <>
          <div className={styles.description_container}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
          <Image
            src={'/assets/' + imagePath}
            width={100}
            height={100}
            className={styles.image_container}
            alt='error'
          />
        </>
      ) : (
        <>
          <Image
            src={'/assets/' + imagePath}
            width={100}
            height={100}
            className={styles.image_container}
            alt='error'
          />
          <div className={styles.description_container}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Container;
