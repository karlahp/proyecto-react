// src/pages/Home.jsx
import React, { useState } from 'react';

function Home() {
  // La lógica del buscador SÍ va aquí
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const buscar = () => {
    console.log("Buscando el término:", terminoBusqueda);
  };

  return (
    // El contenido de la página SÍ va aquí
    <>
      <a href="index.html" className="boton-flecha" style={{ textDecoration: 'none', color: 'aqua', fontSize: '3em', marginLeft: '20px', marginTop: '10px' }}>
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div>
        <h2 className="buscador">Busca tema de tu interés</h2>
        <input
          type="text"
          className="buscador-input"
          id="busqueda"
          placeholder="Buscar..."
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
        />
        <button
          type="button"
          onClick={buscar}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.7em' }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
}

export default Home; // ¡No olvides el export!