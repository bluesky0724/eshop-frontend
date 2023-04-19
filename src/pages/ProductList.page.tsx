import React, { Dispatch, SetStateAction } from "react"
import ProductItem from "../components/ProductItem"
import { CartItem, Product } from "../utils/Type"

// TODO: fetch data from API
const mockData: Array<Product> = [
  {
    id: "1",
    title: "Orange",
    image: "https://html.design/demo/floram/images/p1.png",
    description:
      "Fresh, juicy oranges now available at our shop - perfect for a healthy snack or addition to your daily diet.",
    price: 10,
  },
  {
    id: "2",
    title: "Durian",
    image: "https://html.design/demo/floram/images/p2.png",
    description:
      "Indulge in the creamy, decadent flavor of the king of fruits - try our fresh, delicious durian today!",
    price: 15,
  },
  {
    id: "3",
    title: "Orange",
    image: "https://html.design/demo/floram/images/p1.png",
    description:
      "Fresh, juicy oranges now available at our shop - perfect for a healthy snack or addition to your daily diet.",
    price: 10,
  },
  {
    id: "4",
    title: "Durian",
    image: "https://html.design/demo/floram/images/p2.png",
    description:
      "Indulge in the creamy, decadent flavor of the king of fruits - try our fresh, delicious durian today!",
    price: 15,
  },
  {
    id: "5",
    title: "Orange",
    image: "https://html.design/demo/floram/images/p1.png",
    description:
      "Fresh, juicy oranges now available at our shop - perfect for a healthy snack or addition to your daily diet.",
    price: 10,
  },
  {
    id: "6",
    title: "Durian",
    image: "https://html.design/demo/floram/images/p2.png",
    description:
      "Indulge in the creamy, decadent flavor of the king of fruits - try our fresh, delicious durian today!",
    price: 15,
  },
]

type PropType = {
  cartItems: Array<CartItem>
  setCartItems: Dispatch<SetStateAction<Array<CartItem>>>
}

const ProductListPage = (props: PropType) => {
  const { cartItems, setCartItems } = props

  const handleAddToCart = (product: Product) => {
    const newCartItems = [...cartItems]
    let flag = false
    newCartItems.map((item) => {
      if (item.product.id === product.id) {
        item.count++
        flag = true
      }
      return item
    })

    if (!flag) newCartItems.push({ product, count: 1 })

    setCartItems(newCartItems)
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {mockData.map((product) => (
        <ProductItem product={product} onAddToCart={() => handleAddToCart(product)} />
      ))}
    </div>
  )
}

export default ProductListPage
