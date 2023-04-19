import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import ProductListPage from "./pages/ProductList.page"
import { CartItem } from "./utils/Type"

function App() {
  // ** TODO: Move cart items to global state using Redux or RTK
  const [cartItems, setCartItems] = useState<Array<CartItem>>([])

  return (
    <div className='App sm:max-w-[500px] md:max-w-[1000px] xl:max-w-[1200px]'>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <ProductListPage cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )
}

export default App
