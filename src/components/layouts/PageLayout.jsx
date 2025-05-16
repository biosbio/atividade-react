// import { Outlet } from "react-router-dom";
// import Footer from "../Footer";
// import Header from "../Header";

// const PageLayout = () => {
//       return (
//             <>
//                   <Header/>
//                   <Outlet/>
//                   <Footer/>

//             </>

//       );
// }

// export default PageLayout;
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
`;



const PageLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default PageLayout;
