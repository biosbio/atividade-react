import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const HeaderConteiner= styled.header`
      background-color: red;
      padding: 0 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family : Arial, Helvetica, sans-serif;
      
      & h1{
            color: white;
      }
      & nav ul{
            display: flex;
            list-style: none;
            font-style: bold;
            gap: 35px;
            & li a{
                  text-decoration: none;
                  color: #FFFFFF80;
                  font-size: 20px;
                  &:hover, &.active{
                        color: #FFFFFF;
                        transition: 0.3s;
                         font-weight: bold;
                  }
                   
            }
      }

`;

const Header = () => {
    return (
            <HeaderConteiner>
                  
                 
                        <h1>Logo da pagina</h1>
                        <nav>
                              <ul>
                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                    <li><NavLink to={"/sobre"}>Sobre</NavLink></li>
                                    <li><NavLink to={"/contato"}>Contato</NavLink></li>
                              </ul>
                        </nav>
                 
            </HeaderConteiner>
      );
};
export default Header;