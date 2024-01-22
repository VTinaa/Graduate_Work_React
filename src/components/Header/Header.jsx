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
                    </h1>
                    
                    <input type="text" placeholder="Enter City"/>
                </header>
            </PageWrapper>

        </div>
    )
}

export default Header;