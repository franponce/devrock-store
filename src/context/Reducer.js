// TYPES 

const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";


export default function Reducer (state, action){
    const {payload, type} = action;
    switch (type){
        case LISTAME_PRODUCTOS:
            return{...state, productos: payload};
    }
}
