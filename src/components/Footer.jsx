// import styled from "styled-components";
// import { Link, NavLink } from "react-router-dom";

// const FooterConteiner = styled.footer`
//   background-color: red;
//   padding: 20px 60px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-family: Arial, Helvetica, sans-serif;
//   color: white;

//   .footer-content h2 {
//     margin: 0;
//   }

//   .footer-content p {
//     margin: 5px 0 0 0;
//     color: #ffffffcc;
//   }

//   .footer-links {

    
//     list-style: none;
//   }
 
//   a {
//     color: #ffffffcc;
//     text-decoration: none;
//     font-size: 16px;
//     list-style: none;

//     &:hover {
//       color: #ffffff;
//       font-weight: bold;
//     }
//   }

//   p {
//     margin: 0;
//     font-size: 14px;
//   }
// `;

// const Footer = () => {
//   return (
//     <FooterConteiner>
//       <div className="footer-content">
//         <h2>Contact Us</h2>
//         <p>Email: info@yourcompany.com</p>
//         <NavLink to="/contato">Contato</NavLink> <br />
//         <NavLink to="/sobre">Quem Somos</NavLink>
//         <p>© 2023 Your Company. All rights reserved.</p>
//       </div>
//     </FooterConteiner>
//   );
// };

// export default Footer;
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterConteiner = styled.footer`
  background-color: blueviolet;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;

  .footer-content h2 {
    margin: 0;
  }

  .footer-content p {
    margin: 5px 0;
    color: #ffffffcc;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  a {
    color: #ffffffcc;
    text-decoration: none;
    font-size: 16px;

    &.active,
    &:hover {
      color: #ffffff;
      font-weight: bold;
    }
  }

  p:last-of-type {
    margin-top: 10px;
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterConteiner>
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>Email: info@yourcompany.com</p>
        <div className="footer-links">
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/sobre">Quem Somos</NavLink>
        </div>
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </FooterConteiner>
  );
};

export default Footer;
