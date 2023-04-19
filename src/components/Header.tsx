import React, { Dispatch, SetStateAction, useState } from "react"
import { CartItem } from "../utils/Type"
import ShoppingCartDropdown from "./ShoppingCartDropDown"
import { Search } from "react-feather"

type PropType = {
  cartItems: Array<CartItem>
  setCartItems: Dispatch<SetStateAction<CartItem[]>>
}

const Header = (props: PropType) => {
  // ** Action Handlers
  const handleCheckout = () => {
    alert("checked out!")
    props.setCartItems([])
  }

  return (
    <div className='flex flex-row justify-between items-center m-6'>
      <div className='flex flex-row items-center'>
        <div className='text-2xl font-bold'>E-Shop</div>
        <form className='flex items-center relative ml-2'>
          <input
            type='text'
            placeholder='Search product'
            className='px-4 py-2 pl-8 border border-gray-500 rounded-full w-full outline-gray-300'
          />
          <div className='absolute left-0 ml-3'>
            <Search size={14} />
          </div>
        </form>
      </div>
      <div>
        <ShoppingCartDropdown cartItems={props.cartItems} onCheckout={handleCheckout} />
      </div>
    </div>
  )
}

export default Header
