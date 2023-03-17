import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ( {children}) => {
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const totalCantidad = () => {
        return cart.reduce((acumulador, prod) => acumulador + prod.cantidad, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acumulador, prod) => acumulador + (prod.precio*prod.cantidad), 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    return (

        <CartContext.Provider value = {{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito
        }}>
            {children} 
        </CartContext.Provider>
    )
}