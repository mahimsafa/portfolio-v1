import styles from '../styles/Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            
            <img src={"images/svg/loader2.svg"} alt="Loading..." />

        </div>
    )
}

export default Loader
