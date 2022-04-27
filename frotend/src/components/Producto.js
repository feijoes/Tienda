import React from "react";

export function Productos(props) {
  const { product, onAdd } = props;
  console.log(props)
  console.log(product)

  return (
    <div className="block" style={{width: "200px"}}>
        <img src={props.imagen} className="card-img-top" alt={product.nombre} />
        <div className="card-body block">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">A {product.costo}$ el Rollo</p>
        </div>
        <div>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
    </div>);
}