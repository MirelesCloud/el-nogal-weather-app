import * as React from 'react'
import { Nav, NavHeader, NavLeft, NavCenter, NavRight  } from './Styles'

const Header: React.FC = () => {
  
  return (
    <Nav>
      <NavHeader>
        <NavLeft>El Nogal</NavLeft>
        <NavCenter>
          Weather

        </NavCenter>
        <NavRight>
          NDVI
        </NavRight>
      </NavHeader>
    </Nav>

  )
}

export default Header