import React from "react";
export function Productos(props){
    const nombre = props.nombre
    const imagen = props.imagen
    const costo = props.costo
    return (
        <article className="col-sm-4 mb-3">
        <div className="card">
            <h5 className="card-title">{nombre}</h5> 
            <div>
            <img src={imagen} className='IMG' />
                <p className="lead">A {costo}$ el Rollo</p>
                <button className="btn btn-outline-edwinc" data-fruta="Negro" data-precio="30">
                    <img src="media/images/carrodecompra.svg" width="20" height="20" />
                </button>
            </div>
        </div>
    </article>
    );
  }