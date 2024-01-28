import styles from './logo.module.css'

import { HOME_RATH } from '../../constants/pathNames'

import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to={HOME_RATH}>
                <h1 className={styles['logo-title']}>SkyView</h1>
                <i class="fa-solid fa-cloud-moon"></i>
            </Link>
        </>
    )
}

export default Logo;