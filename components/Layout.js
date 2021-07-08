import Nav from './Nav'
import Foot from './Footer'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div>
            {children}
        </div>
        <Foot />
        </>
    )
}

export default Layout
