import { Link } from "react-router-dom";
import { CardWidge } from "./CardWidge";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <> 

    <Link to="/"><div className="div1">CanvasExpress </div></Link>
    <ul className="nav-links">
      <li> <Link to="/">Home</Link> </li>
      <li>
        <Link to="/category/Drama">Drama</Link>
      </li>
      <li>
        <Link to="/category/Western">Western</Link>
      </li>
      <li>
        <Link to="/category/Documentary">Documentary</Link>
      </li>
      <li>
        <Link to="/nosotros">Nosotros</Link>
      </li>
    </ul>
    <CardWidge />
    
  </>
);
