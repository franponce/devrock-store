import React from "react";
import IconCart from "../assets/statics/carrito.png";
import Volver from "../assets/statics/volver.png";

export default function Header() {
  return (
    <>
      <a href="carrito.html">
        <img src={IconCart} alt="" className="carritou" />
      </a>
      <a href="">
        <img src={Volver} alt="" className="volver" />
      </a>

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
