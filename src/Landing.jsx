// src/pages/Landing.jsx
import React from 'react';
// 1. ¡Importamos Link para navegar!
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      {/* 2. Los atributos de video cambian a camelCase (autoPlay) */}
      <video autoPlay muted loop id="bg-video-p">
        {/* 3. La ruta del video apunta a 'public/' */}
        <source src="/fondo particulas.mp4" type="video/mp4" />
      </video>

      {/* 4. 'class' se vuelve 'className' */}
      <div className="content-p">
        <h1 draggable="true">
          {/* 5. El 'a' se vuelve un 'Link' que lleva a '/home' */}
          <Link to="/home">Quorum</Link>
        </h1>
      </div>
    </>
  );
}

export default Landing;