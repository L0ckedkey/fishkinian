'use client'

import { usePathname } from 'next/navigation';
import styles from '../styles/navbar.module.css';

interface MenuProps {
    icon: string;
    title: string;
    location: string;
}

const Menu: React.FC<MenuProps> = ({ icon, title, location }) => {
    var url = usePathname();
    url = url === '/' ? '/Home' : url
    location = location !== '/' ? '/' + location : location
    return (
        <a href={location} className={`${url === location ? styles.menu_active : ''}`}>
            <span className="material-symbols-outlined">{icon}</span>
            <span>{title}</span>
        </a>
    );
};

export default Menu;
