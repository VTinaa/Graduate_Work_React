import styles from './navigation.module.css'

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import {
    HOME_RATH,
    HOURLY_RATH,
    DAILY_RATH
} from "../../constants/pathNames"


const Navigation = (props) => {
   
    return (
        <nav>
            <Link to={HOURLY_RATH}> Daily Forecast 16 days </Link>
            <Link to={DAILY_RATH}> Climatic Forecast 30 days </Link>
        </nav>
    )
}

export default Navigation;