
import React, {useState} from 'react'
import { Hamburger, Logo, Nav, Menu, MenuLink } from './NavbarStyles'
import {FaHamburger} from "react-icons/fa"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <Logo onClick={() => setIsOpen(false)}  to="/home" > 
        <i>{"<Chef Ozgur/>"}</i>
        <span> recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {/* <span/>
        <span/>
        <span/> */}
        <FaHamburger/>
      </Hamburger>

      <Menu isOpen ={isOpen}>
        <MenuLink onClick={() => setIsOpen(!isOpen)}  to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink 
        onClick={() => setIsOpen(!isOpen)} 
        onMouseUp={() => sessionStorage.clear()}
        to="/"
        >Logout
        </MenuLink>
      </Menu>


    </Nav>
  )
}

export default Navbar