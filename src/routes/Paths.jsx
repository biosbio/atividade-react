import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import Sobre from "../pages/Sobre";
import Contatos from "../pages/Contatos";


const Paths = () => {
      return (  
            <>
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<PageLayout />}>
                                    <Route index element={<Home />} />
                                    <Route path="/sobre" element={<Sobre />} />
                                    <Route path="/contato" element={<Contatos />} />
                              </Route>
                              <Route path="*" element={<NotFound />} />
                        </Routes>

                  </BrowserRouter>

            </>
      );
}
 
export default Paths;