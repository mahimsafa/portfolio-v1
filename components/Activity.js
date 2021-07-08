import Link from 'next/link'
import styles from '../styles/ActivityPost.module.css'

export default function Post({post}) {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
            {/* <a href={post.url} target='_blank' rel="noopener noreferrer"> */}
                <div className={styles.card} onClick={() => openInNewTab(post.url)}>
                    <div className={styles.image}>
                        <div className={styles.img}>
                            <img src={post.coverImage} alt={post.title} className={styles.img}/>
                        </div>
                    </div>
                    <div className={styles.details}>

                        <h3>{post.title}</h3>
                        <div className={styles.postDate}>Posted on: {post.date}</div>
                        <p>{post.details}</p>
                    </div>

                    
                    <button className={post.moreInfo == '' | post.moreInfo == undefined ? 'hidden' : 'btn'} onClick={() => openInNewTab(post.moreInfo)}>More info</button>
                    
                    
                </div>
            {/* </a> */}
        </>
    )
}
