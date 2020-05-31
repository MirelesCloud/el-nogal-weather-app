import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { Link } from 'react-router-dom'

export const Device = styled.div`
  position: absolute;
  right: 2rem;
  height: $device-height;
  width: $device-width;
  padding: 90px 10px;
  border: 5px solid #2f2f2f;
  border-radius: 60px;
  background-color: #171717;
  box-shadow: 0 0 50px 10px rgba(0,0,0,0.4);
  
  &:before, &:after {
    content: '';
    position: absolute;
    z-index: 2;
  }
  
  &:before {
    width: 20%;
    height: 10px;
    top: 40px;
    left: 40%;
    border-radius: 10px;
    background-color: #2f2f2f;
  }
  
  &:after {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 5px #2f2f2f;
    left: calc(50% - 25px);
    bottom: 20px;
  }

`

export const Section = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  overflow: hidden;
  background-color: $color-night;
`

export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`

export const PageHeader = styled.div`
  display: flex
  justify-content: center;
`

export const PageTitle = styled.h3`

`
export const Column = styled.div`
  float: left;
  width: 50%;

  @media(max-width: 778px) {
    width: 100%;
  }
`

export const SingleColumn= styled.div`
  float left:
  display: flex;
  margin: 20px;
  width: 100%;
  justify-content: center;
`

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`
export const NdviImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const NdviImage = styled.img`
  width: 200px;
  height: auto
`

export const MarkerBtn = styled.button`
  position: absolute;
  top: 50px;
  left: 150px;
  z-index: 2000;
  width: 100px;
  height: 50px;
  color: gray;
`


/* Header */
export const Nav = styled('div')`
    background-color: #f7f7f5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

export const NavHeader = styled('div')`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`

export const NavLeft = styled('div')`
    width: 33.333%;
    text-align: left;
    font-size: 2em;
    font-weight: 300;

    @media (max-width: 992px) {
        font-size: 1.5em;
      }
    
    @media(max-width: 768px) {
      font-size: 1.3em;
    }
`

export const NavCenter = styled('div')`
    wdith; 33.333%;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    @media (max-width: 378px) {
        font-size: 1.5em;
      }
`

export const NavRight = styled('div')`
    width: 33.333%;
    text-align: right;
    font-size: 2rem;
    font-weight: 300;
`

export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`

export const Button = styled.button`
 background-color: transparent;
 border: 1px solid #dbdbdb;
 color: #262626;
 border-radius: 4px;
 cursor: pointer;
 font-weight: 600;
 padding: 5px 9px;
 text-transition: capitalize;
 font-size: 14px;
 margin-left: 20px
`
export const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

export const MenuButton = styled.li`
  float: left;
  text-align: center;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 16px;
  display: block;
  
  &:hover {
    background-color: #f7f7f5;
  }

  &:visited {
    color: #000000;
  }
  
`

/*Load Message */
export const LoadContainer = styled.div`
  top: 50%;
  left: 50%;
  padding: 26px 20px;
  width: 100%;
  text-align: center;

`

/*Select*/
export const Select = styled.select`
  width: 150px;
  font-size: 1rem;
  padding: 5px;
`

/* Body */
export const MainContainer = styled('div')`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
  flex-direction: column;
  
`

export const ContentWrapper = styled('div')`
  display: flex;
  
`

export const ForecastWrapper = styled.div`
 margin-top: 50px;
 display: flex;
 flex-wrap: wrap;
 
`

export const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #cccccc;
  text-align: center;
`

/*Table */

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 14px;
`
export const TableBody = styled.tbody``

export const TableHeader = styled.th`
  text-align: left;
  padding: 5px;
`

export const TableCell = styled.td`
  text-align: left;
  padding: 5px;
`

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
`

export const TableImage = styled.img`
 max-width: 3rem;
 height: auto;
`
/* Card */
export const Card = styled('div')`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(20% - 5px);
    margin: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    

    @media (max-width: 992px) {
      flex-basis: calc( 15% - 20px);
    }

    @media (max-width: 600px) {
      flex-basis: calc(25% - 20px)
    }

    &:hover {
      background-color: rgba(204, 239, 266, 0.3);
    }
`

export const CardBody = styled('div')`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0.5rem;
`

export const CardImage = styled('img')`
    cursor: pointer;
    width: 100%;
    height: 10vw;
    object-fit: cover;
  
`
export const CardHeader = styled('div')`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

export const CardText = styled('div')`
  padding: 2px;
  margin: 2px;
  font-size: 0.7rem;
`

export const CardFooter = styled('div')`
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`

/* Weather */
export const ContainerDetails = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  left: 20%;
`

export const ContainerLeft = styled('div')`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const ContainerRight = styled('div')`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 600px) {
    margin-top: 50px;
  }
  
`

export const ContainerHeader = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: center;
`

export const ContainerImage = styled.img`
  border-radius: 50%;
  width: 300px;
  border: 1px solid #ccc
  padding: 5px;
`

export const ContainerText = styled.p`
    margin-right: 25px;
`
export const ContainerList = styled.ul`
   list-style-type: none;
`

export const ListItem = styled.li`
  font-size: 14px;
`

/* Modal */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 40px 50px;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
`

export const ModalContainer = styled.div`
  position: relative;
  z-index: 0;
  
`

export const ModalWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`
export const ModalContent = styled.div`
  position: relative;
  flex-basis: 100%;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in;
`

export const ModalHeader = styled.h4``

export const ModalText = styled.p`
  padding: 0px;
  margin: 3px;
`
export const CloseModal = styled.p`
  float: right;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  cursor: pointer;
  margin: 0 0 50px;
  

  @:hover {
    color:#000;
    text-decoration: none;
    opacity: .3;
  }
  
`

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.7);
`


