import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
export const Header = () => (
  <>

    <div className="logo">
    <Link to="/">
      <img
        src="https://thumbs.dreamstime.com/b/icono-plano-del-vector-ejemplo-arte-caballete-tablero-en-blanco-marco-de-la-lona-artista-pinte-historieta-madera-vista-delantera-146750289.jpg"
        alt=""
      />
      </Link>
      <NavBar />
    </div>
    
     

   
  </>
);
