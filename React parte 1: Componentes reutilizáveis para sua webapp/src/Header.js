import React from 'react';

const Header = () => {
    return (
        <nav>
        <div class="nav-wrapper amber accent-4">
          <a href="/logo" class="brand-logo">Casa do Código</a>
          <ul id="nav" class="right">
            <li><a href="/Autores">Autores</a></li>
            <li><a href="/Livros">Livros</a></li>
            <li><a href="/Sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;