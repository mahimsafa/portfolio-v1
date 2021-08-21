import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            controlNavbar()
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }, [])
    })

    return (
        <nav className={show ? 'show' : 'hide'}>
            <ul className="main-nav">
                <li><div  onClick={() => window.location.replace("/#about")}>About</div></li>
                <li><div  onClick={() => window.location.replace("/#portfolio")}>Projects</div></li>
                <li><div  onClick={() => window.location.replace("/#skills")}>Skills</div></li>
                <li><div  onClick={() => window.location.replace("/#resume")}>Experience</div></li>
                <li><div  onClick={() => window.location.replace("/#contact")}>Contact</div></li>
            </ul>
        </nav>
    )
}
export default Navbar
