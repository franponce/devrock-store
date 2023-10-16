import React from 'react';
import "../assets/css/Carrito.css";
import ItemCart from '../components/ItemCart';

export default function Cart() {
  return (
    <>
    <div className="carrito">
          <div className="carrito-listadito">
            <ItemCart></ItemCart>
            <ItemCart></ItemCart>
            <ItemCart></ItemCart>
            <ItemCart></ItemCart>
          </div>

          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D 3400</strong>
          </div>
        </div>
    </>
  )
}

