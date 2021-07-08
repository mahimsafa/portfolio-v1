import Link from 'next/link'
import styles from '../styles/Post.module.css'

export default function Post({post}) {
    return (
        <>
            <Link href={`/blog/${post.slug}`}>
                <a>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <div className={styles.img}>
                                <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} className={styles.img}/>
                            </div>
                        </div>
                        <div className={styles.details}>

                            <h3>{post.frontmatter.title}</h3>
                            <div className={styles.postDate}>Posted on: {post.frontmatter.date}</div>
                            <p>{post.frontmatter.excerpt}</p>
                            {/* <Link href={`/blog/${post.slug}`}>
                                <a className="btn">Read More...</a>
                            </Link> */}
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}
