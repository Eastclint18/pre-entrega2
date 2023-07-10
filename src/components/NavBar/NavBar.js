import Carro from "../WidgetCarrito/WidgetCarrito";
import { Link, NavLink } from 'react-router-dom'
function NavBar() {
          return (
                    <nav className="navbar ">
                              <Link to={'/'}>
                              <h3>Ecommerce</h3>
                              </Link>
                              <div className="Categories">
                              <NavLink to={"/category/procesadores"} className="button is-danger is-light">Procesadores</NavLink>
                              <NavLink to={"/category/GPU"} className="button is-danger is-light">GPU</NavLink>
                             
                            
                                     
                              </div>
                              <Carro/>
                    </nav>
          )
}

export default NavBar  