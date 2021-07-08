import Layout from '../components/Layout'
import '../styles/globals.css'
import Loader from '../components/Loader'

import Router from 'next/router'
import {useState} from 'react'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  const [ loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  const currentUrl = useRouter().route

  return (
    <>
    {/* {console.log(currentUrl)} */}
    { loading && <Loader /> }
    <Layout>
      <div className={currentUrl === "/" ? "" : "root"}>
        <Component {...pageProps} />
      </div>
    </Layout>
  </>
  )
}

export default MyApp
