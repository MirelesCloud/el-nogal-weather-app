import * as React from 'react'
import { Nav, NavHeader, NavLeft, NavCenter, NavRight  } from './Styles'

const Header: React.FC = () => {
  
  return (
    <Nav>
      <NavHeader>
        <NavLeft>El Nogal</NavLeft>
        <NavCenter>
        </NavCenter>
        <NavRight>
        </NavRight>
      </NavHeader>
    </Nav>
  )
}

export default Header