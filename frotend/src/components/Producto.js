import React from "react";
export function Productos(props){
    const nombre = props.nombre
    const imagen = props.imagen
    const costo = props.costo

    return (
        <div className="card" style={{width: "200px"}}>
            <img src={imagen} className="card-img-top" alt="..." />
            <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">A {costo}$ el Rollo</p>
        <button onClick={a}></button>
        </div>
        </div>
        
    );
  }