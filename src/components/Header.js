import React from 'react';

const Header = props => {
  return (
    <header className='container-header'>
      <h1>
        {props.titulo}
      </h1>
    </header>
  )
}

export default Header;