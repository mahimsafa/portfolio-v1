import { useState, useEffect } from 'react'
import Head from 'next/head'

import { sortByDate } from '../utils/ActivitySort'

import jsonData from '../public/data/activities.json';
import Post from '../components/Activity'
import styles from '../styles/Activities.module.css'

const Activities = () => {
    
    const data = [...jsonData]
    const loadData = data.sort(sortByDate)
    const [visible, setVisible] = useState(4)

    const showMoreActivities = () => {
        setVisible(preValue => preValue + 4)
    }

    return (
        <>
        <Head>
        <meta property="og:title"              content="Activities | Mahim Safa" />
        <title>Activities | Mahim Safa</title>
        </Head>
        <div className={styles.container}>

            <h1 className={styles.h1}>Activities</h1>

            <h4 className={styles.h2}>Some of my recent activities are listed below</h4>


            <div className={styles.posts}>
                
                {loadData.slice(0,visible).map((activity, index) => (
                    <Post key={index} post={activity}/>
                    ))}
                
            </div>

            <div className={styles.loadMore}>
                <button className={loadData.length > visible ? "btn" : "hidden"}  onClick={showMoreActivities}>Load More...</button>
            </div>

        </div>
        </>
    )
}

export default Activities
