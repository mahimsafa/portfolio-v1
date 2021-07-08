import styles from "../styles/Footer.module.css"
import Link from 'next/link'


const Footer = () => {
    return (
        <div className={styles.container}>
            <p><b>Made with <i>♥</i> by <Link href="/">Mahim Safa</Link>.</b></p> 
        </div>
    )
}

export default Footer
