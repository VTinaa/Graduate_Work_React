import PageWrapper from '../PageWrapper/PageWrapper';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles['common']}>
            <PageWrapper>
                <footer className={styles['footer']}>
                    <p>2024</p>
                    {/* <i>GitHub</i> */}
                    <a href="https://github.com/VTinaa/Graduate_Work_React"><i class="fa-brands fa-github"></i></a>
                    <p>Graduate work</p>
                </footer>
            </PageWrapper>
        </div>
    )
}

export default Footer;