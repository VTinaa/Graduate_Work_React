import styles from './pageWrapper.module.css'

const PageWrapper = ( { children } ) => {
    return <div className={styles['common']}>{ children }</div>

}

export default PageWrapper;