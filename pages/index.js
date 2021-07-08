import Head from 'next/head'
import styles from '../styles/Index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.forest}>

        <Head>
        <title>Mahim Safa ! ! Virtual Profile</title>
        <meta property="og:title"              content="Mahim Safa ! Virtual Profile" />
      </Head>
      
        <div className={styles.container}>
          <div className={styles.image}>
            <img src="images/me/me1.jpg" alt="Display Picture" />
          </div>
          <div className={styles.about}>
            <div className={styles.description}>
                <h2><span>About Me </span></h2>
                <p>Hay, I am <span>Mahim Safa. </span>I am a <span>Penetration Tester</span> as well as a <span>Web Developer</span> based in Bangladesh. I try to automate my works through scripting as it saves a huge time. I am a quick learner. I try to learn about new Technologies and other things every day as much as I can. Like to play games in my free time.</p>
            </div>


            <div className={styles.social}>
                <a href="https://www.facebook.com/TheBikkritoGuy" title="Facebook" className={styles.lnk} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className={styles.ico} />
                </a>
                <a href="https://twitter.com/mahim_safa" title="Twitter" className={styles.lnk} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className={styles.ico} />
                </a>
                <a href="https://www.instagram.com/mahim_safa/" title="Instagram" className={styles.lnk} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className={styles.ico} />
                </a>
                <a href="https://www.linkedin.com/in/mahimsafa/" title="Linkedin" className={styles.lnk} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className={styles.ico} />
                </a>
                <a href="https://github.com/mahimsafa" title="GitHub" className={styles.lnk} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} className={styles.ico} />
                </a>
                <a href="https://t.me/mahim_safa" title="Telegram" className={styles.lnk} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className={styles.ico} />
                </a>
                <a href="mailto:mahimsafa@gmail.com" title="Email" className={styles.lnk}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.ico} />
                </a>
            </div>
        </div>

      </div>
     
      </div>
    </div>
  )
}



// export async function getServerSideProps() {
//   await new Promise((resolve => {
//     setTimeout(resolve, 2000)
//   }))
//   return {
//     props: {}
//   }

// }
