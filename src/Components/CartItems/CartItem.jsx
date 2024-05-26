import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);
  return (
    <div className='cartitem'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return (
                <div>
                  <div className="cartitem-format cartitem-format-main">
                      <img src={e.image} alt="" className='cartitem-product-icon'/>
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                      <p>${e.new_price*cartItems[e.id]}</p>
                      <img className='cart-icon-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                  </div>
                </div>
            )
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
            <h1>Total Carts</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <div className="cartitem-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <div className="cartitem-total-item">
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>
            <button>Proceed to Checkout</button>
        </div>
        <div className="cartitem-promocode">
            <p>If you have a promocode, Enter it here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
