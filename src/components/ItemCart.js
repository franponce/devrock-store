import React from 'react';
import img from "../assets/statics/2.png";
import "../assets/css/ItemCarrito.css";

export default function ItemCart() {
  return (
    <>
    <div className="carrito-item">
              <img
                src={img}
                alt=""
                className="carrito-item-img"
              />
              <div className="carrito-txt">
                <h1 className="carrito-item-titulo">Cerebro loco</h1>
                <h3 className="carrito-item-precio">AR$ 150</h3>
              </div>
              <img src="borrar.png" alt="" className="carrito-item-borrar" />
            </div>
    </>
  )
}
