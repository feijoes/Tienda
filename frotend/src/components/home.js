import React from "react";
import { useState, useEffect } from "react";
import {Productos} from './Producto'
import {Carrito} from "./Carrito"
import { RegisterApp } from "./Register";
import Header from "./Header";
export function HomePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`/api/productos/`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData)).finally(() => {
        setLoading(false);
      });
      
  }, []);


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

    if (loading){
      return <p>loading</p>
    }
    
  
     return ( 
       <div>
        <div id="tienda"> 
            <div className="content">
                <div className="load" id="load">
                    <img className="img" src="media/images/logito.svg"/>
                </div> 
            </div> 
           
              <Header countCartItems={cartItems.length}></Header>
            
            
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-indicators">
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                 </div>
                 <div className="carousel-inner">
                   <div className="carousel-item active" style={{width: "100%", height:"300px"}}>
                        <img src="media/images/gris.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block">
                          <h1>Quienes Somos.</h1>
                          <p>Somos una empresa que ofrece la m??s amplia gama de telas y productos para la confecci??n. Nuestra variedad incluye telas para s??banas, lonas, sat??n, tela chicle, velo suizo, tul, gabardinas, tela para camisa a cuadros, tela mil l??neas, guata, pana, casimires, lanas, licras, dacrones finos, dacrones normales, tafet??nes, casimires, telas tipicas, hilos, hilos para lonas, encajes, aplicaciones y mucho m??s..</p>
                        </div>
                   </div>
                  
                   <div className="carousel-item" style={{width: "100%", height:"300px"}}>
                        <img src="media/images/gris.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block">
                        <h1>Misi??n.</h1>
                        <p>Nuestra mision es surtir al Mercado de la confecci??n, con las ultimas tendencias en telas, estampados, colores y acabados y ser la opci??n n??mero uno a nivel nacional y regional.</p>
                        </div>
                   </div>
                
                   <div className="carousel-item" style={{width: "100%", height:"300px"}}>
                        <img src="media/images/gris.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block">
                        <h1>Visi??n.</h1>
                    <p>Mantenernos como l??deres en el mercado textil en nuestro pa??s, ofrecer lo m??s novedoso a mayoristas y minoristas, logrando as?? clientes con una satisfacci??n total.</p>
                        </div>
                   </div>
                 </div>
                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span className="visually-hidden">Previous</span>
                 </button>
                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className="visually-hidden">Next</span>
                 </button>
                </div>
                
        <main className="container mt-5" id="main">
            <div className="containeredwin row text-center block">
            {data.map((product) => (
                <Productos key={product.id} product={product} onAdd={onAdd} />))
            } 
            </div>
        </main>
        <Carrito cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}/>
        
        </div>
        <div id="formulario12" >
          <RegisterApp cartItems={cartItems}/>
        </div>
        </div>); }
  