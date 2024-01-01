import Catalogue from '../components/catalogue'
import styles from '../styles/fishCatalogue.module.css'

export default function FishCatalogue(){

    const titles = [
        'Avatar Betta',
        'Blue Rim Betta',
        'Red Koi Cooper Betta',
        'Crowntail Betta',
        'Halfmoon Betta',
        'Mascot Halfmoon Betta',
        'Veiltail Betta',
        'Avatar Betta',
        'Blue Rim Betta',
        'Red Koi Cooper Betta',
        'Crowntail Betta',
        'Halfmoon Betta',
        'Mascot Halfmoon Betta',
        'Veiltail Betta',
        'Avatar Betta',
        'Blue Rim Betta',
        'Red Koi Cooper Betta',
        'Crowntail Betta',
        'Halfmoon Betta',
        'Mascot Halfmoon Betta',
        'Veiltail Betta',
        'Avatar Betta',
        'Blue Rim Betta',
        'Red Koi Cooper Betta',
        'Crowntail Betta',
        'Halfmoon Betta',
        'Mascot Halfmoon Betta',
        'Veiltail Betta',
        'Avatar Betta',
        'Blue Rim Betta',
        'Red Koi Cooper Betta',
        'Crowntail Betta',
        'Halfmoon Betta',
        'Mascot Halfmoon Betta',
        'Veiltail Betta',
    ]

    const imagePaths = [
        'avatar',
        'bluerim',
        'cooper',
        'crowntail',
        'halfmoon',
        'mascot',
        'veiltail',
        'avatar',
        'bluerim',
        'cooper',
        'crowntail',
        'halfmoon',
        'mascot',
        'veiltail',
        'avatar',
        'bluerim',
        'cooper',
        'crowntail',
        'halfmoon',
        'mascot',
        'veiltail',
        'avatar',
        'bluerim',
        'cooper',
        'crowntail',
        'halfmoon',
        'mascot',
        'veiltail',
        'avatar',
        'bluerim',
        'cooper',
        'crowntail',
        'halfmoon',
        'mascot',
        'veiltail',
    ]

    const links = [
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-avatar-bahanan?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-pk-blue-rim-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-nemo-copper-red-koi-copper-yellow-koi-copper-yellow-koi-copr?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-crowntail-pkct-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-halfmoon-hm-armageddon-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-halfmoon-double-tail-hmdt-mascot-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-veiltail-vt-armageddon-line-thailand?extParam=whid%3D1849610%26src%3Dshop',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-avatar-bahanan?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-pk-blue-rim-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-nemo-copper-red-koi-copper-yellow-koi-copper-yellow-koi-copr?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-crowntail-pkct-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-halfmoon-hm-armageddon-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-halfmoon-double-tail-hmdt-mascot-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-veiltail-vt-armageddon-line-thailand?extParam=whid%3D1849610%26src%3Dshop',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-avatar-bahanan?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-pk-blue-rim-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-nemo-copper-red-koi-copper-yellow-koi-copper-yellow-koi-copr?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-crowntail-pkct-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-halfmoon-hm-armageddon-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-halfmoon-double-tail-hmdt-mascot-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-veiltail-vt-armageddon-line-thailand?extParam=whid%3D1849610%26src%3Dshop',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-avatar-bahanan?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-pk-blue-rim-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-nemo-copper-red-koi-copper-yellow-koi-copper-yellow-koi-copr?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-crowntail-pkct-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-halfmoon-hm-armageddon-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-halfmoon-double-tail-hmdt-mascot-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-veiltail-vt-armageddon-line-thailand?extParam=whid%3D1849610%26src%3Dshop',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-avatar-bahanan?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-pk-blue-rim-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-nemo-copper-red-koi-copper-yellow-koi-copper-yellow-koi-copr?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-crowntail-pkct-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-halfmoon-hm-armageddon-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-halfmoon-double-tail-hmdt-mascot-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-veiltail-vt-armageddon-line-thailand?extParam=whid%3D1849610%26src%3Dshop',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-avatar-bahanan?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-pk-blue-rim-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-plakat-nemo-copper-red-koi-copper-yellow-koi-copper-yellow-koi-copr?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-plakat-crowntail-pkct-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-halfmoon-hm-armageddon-line-thailand?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-cupang-halfmoon-double-tail-hmdt-mascot-grade-a?extParam=src%3Dshop%26whid%3D1849610',
        'https://www.tokopedia.com/fishkinian-official/ikan-hias-cupang-veiltail-vt-armageddon-line-thailand?extParam=whid%3D1849610%26src%3Dshop'
    ]

    const isLinkAvailable = true

    return (
        <div className={styles.fish_catalogue_container}>
            <h1 className={styles.title_container}>Fish Catalogue</h1>
            <div className={styles.catalogue_container}>
                {titles.map((title, index) => (
                    <Catalogue title={title} imagePath={imagePaths[index]} index={index} link={links[index]} isLinkAvailable/>
                ))}
            </div>
        </div>
    )
}