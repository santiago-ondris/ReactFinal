import React, { Component } from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '', // Estado para la categoría seleccionada
    };
  }

  // Función para abrir el menú desplegable
  openProductsMenu = () => {
    this.setState({ selectedCategory: 'Productos' });
  };

  // Función para cerrar el menú desplegable
  closeProductsMenu = () => {
    this.setState({ selectedCategory: '' });
  };

  render() {
    const { selectedCategory } = this.state;

    return (
      <div className="d-flex flex-column mb-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">Alenka</Link>
            <div className="nav-item ms-3" onMouseEnter={this.openProductsMenu} onMouseLeave={this.closeProductsMenu}>
              <a className="nav-link dropdown-toggle" href="#" id="productsDropdown">
                Productos
              </a>
              <ul className={`dropdown-menu ${selectedCategory === 'Productos' ? 'show' : ''}`}>
                <li>
                  <Link to="/category/Botas" className="dropdown-item">Botas</Link>
                </li>
                <li>
                  <Link to="/category/Borcegos" className="dropdown-item">Borcegos</Link>
                </li>
                <li>
                  <Link to="/category/Sandalias" className="dropdown-item">Sandalias</Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav me-auto">
              <li className="nav-item ms-3">
                <Link to="/" className="nav-link">Inicio</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <div className="ms-4">
              <CartWidget />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

