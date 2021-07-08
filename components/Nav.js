import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";


const Nav = () => {
  const currentUrl = useRouter().route

    return (
        <div className={styles.nav + " " + (currentUrl == '/' ? styles.noBg : styles.bg)}>
            <div className={styles.logo}>
                <Link href='/' passHref>
                    <img src={"images/svg/logo-white.svg"} alt="" />
                </Link>
            </div>
            <ul className={styles.links}>
                <li><Link href='/' passHref>/home</Link> </li>
                {/* <li><Link href='/blog'>/blog</Link> </li> */}
                <li><Link href='/activities' passHref>/activities</Link> </li>
            </ul>
            
        </div>
    )
}

export default Nav
