import { Link } from "react-router-dom";

const NotFound = () => {
      return (
            <>
                  <h3>Pagina nao encontrada</h3>
                  <p>A pagina que você está procurando não existe.</p>
                  <Link to={"/"}>Voltar para a página inicial</Link>
            </>
            
      );
}

export default NotFound;