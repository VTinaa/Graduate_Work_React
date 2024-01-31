import styles from './navigation.module.css'

import { Link } from "react-router-dom";

import {
    HOME_RATH,
    CLIMATIC_RATH,
    DAILY_RATH
} from "../../constants/pathNames"
import PageWrapper from '../PageWrapper/PageWrapper';


const Navigation = () => {
   
    return (
        <PageWrapper>
            <nav className={styles['common']}>
                <Link to={DAILY_RATH}> 
                    <div className={styles['link-hourly']}> Daily Forecast 16 days </div> 
                </Link>
                <Link to={CLIMATIC_RATH}> 
                    <div className={styles['link-daily']}> Climatic Forecast 30 days </div>
                </Link>
            </nav>
        </PageWrapper>
    )
}

export default Navigation;