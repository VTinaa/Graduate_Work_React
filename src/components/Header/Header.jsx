import PageWrapper from '../PageWrapper/PageWrapper';
import styles from './header.module.css'
// import img from '../../images/10844370.png'
import Logo from '../Logo/Logo'


const Header = () => {
    return (
        <div className={styles['common']}>
            <PageWrapper>
                <header className={styles['header']}>
                    {/* <h1>SkyView</h1> */}
                    <Logo />

                    {/* <i class="fa-solid fa-cloud-moon"></i> */}
                    
                    <input type="text" placeholder="Enter City"/>
                    
                </header>
            </PageWrapper>

        </div>
    )
}

export default Header;