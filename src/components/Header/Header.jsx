import Navigation from '../Navigation/Navigation';
import PageWrapper from '../PageWrapper/PageWrapper';
import styles from './header.module.css'
// import img from '../../images/10844370.png'


const Header = () => {
    return (
        <div className={styles['common']}>
            <PageWrapper>
                <header className={styles['header']}>
                    <h1>SkyView
                    {/* <img src={img} alt="" /> */}
                    {/* <i class="fa-brands fa-cloudversify"></i> */}
                    {/* <i class="fa-brands fa-skyatlas"></i> */}
                    </h1>
                    <i class="fa-solid fa-cloud-moon"></i>
                    
                    <input type="text" placeholder="Enter City"/>
                    <Navigation />
                </header>
            </PageWrapper>

        </div>
    )
}

export default Header;