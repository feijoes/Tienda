import React from "react";
import { useState, useEffect } from "react";
import {Productos} from './producto'
export function HomePage() {
    const [data, setData] = useState(null);


  useEffect(() => {
    fetch(`/api/productos/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
      })
      
  }, []);
  
  
    
    
     return ( 
        <div> 
            <div className="content">
                <div className="load" id="load">
                    <img className="img" src="media/images/logito.svg"/>
                </div> 
            </div> 
            <header id="header" > 
                <img className="logo" src="media/images/logito.svg" />
                <a href='carrito'> <img className="user" src="media/images/carrodecompra.svg"/></a>
                <a href='login'> <img className="user" src="media/images/user.svg" /> </a>
            </header> 
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel"> 
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button> 
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active"> 
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"> 
                        <rect width="100%" height="100%" fill="#001122"/>
                    </svg> <div className="container"> 
                    <div className="carousel-caption text-start"> 
                        <h2>Quienes Somos.</h2>
                        <p>Somos una empresa que ofrece la más amplia gama de telas y productos para la confección. Nuestra variedad incluye telas para sábanas, lonas, satín, tela chicle, velo suizo, tul, gabardinas, tela para camisa a cuadros, tela mil líneas, guata, pana, casimires, lanas, licras, dacrones finos, dacrones normales, tafetánes, casimires, telas tipicas, hilos, hilos para lonas, encajes, aplicaciones y mucho más.</p> 
                        <p><a className="btn-outline-edwin" href="#main">Ver Productos</a></p>
                    </div> 
                </div> 
            </div> 
        </div>
        <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"> 
                <rect width="100%" height="100%" fill="#001122"/> 
            </svg>
            <div className="container">
                <div className="carousel-caption text-start">
                    <h1>Misión.</h1>
                    <p>Nuestra mision es surtir al Mercado de la confección, con las ultimas tendencias en telas, estampados, colores y acabados y ser la opción número uno a nivel nacional y regional.</p>
                    <p><a className="btn btn-lg btn-outline-edwin" href="#main">Ver Productos</a></p>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#001122"/>
            </svg>
            <div className="container">
                <div className="carousel-caption text-start">
                    <h1>Visión.</h1>
                    <p>Mantenernos como líderes en el mercado textil en nuestro país, ofrecer lo más novedoso a mayoristas y minoristas, logrando así clientes con una satisfacción total.</p>
                    <p><a className="btn btn-lg btn-outline-edwin" href="#main">Ver Productos</a></p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        <main className="container mt-5" id="main">
            <div className="containeredwin row text-center">
            {data &&data.map(({nombre, costo , imagen},id) => (
                <Productos key={data.id}nombre={nombre} costo={costo} imagen={imagen} />
            
          ))}
            </div>
        </main>
        
        </div>); }