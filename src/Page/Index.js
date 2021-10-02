import React, { useState } from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Introduction from '../Components/Introduction'
import Navbar from '../Components/Navbar'
import Portfolio from '../Components/Portfolio'
import Resume from '../Components/Resume'
import Sidebar from '../Components/SideBar'
import Skill from '../Components/Skill'
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div id='introduction'>
                <Introduction />
            </div>
            <div id='about' >
                <About />
            </div>
            <div id='resume'>
                <Resume />
            </div>
            <div id='skills'>
              <Skill/>
          </div>
            <div id='portfolio'>
                <Portfolio />
            </div>
            <div id='contact'>
                <Contact /> 
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
