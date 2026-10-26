import { type CartItem } from "./type";
import { useState } from "react";
type CartBarProps = {
  cartList: CartItem[]
  onChangingPounds: (productId: string, aim: number) => void;
  onRemoveItem: (productId: string) => void;
  onClear: () => void;
}

function ListCartItems({cartList, onChangingPounds, onRemoveItem, onClear}:CartBarProps) {
  const totalSum = (cartList.reduce((sum, item) => sum + item.product.price * item.pounds, 0) / 100).toFixed(2)
  const [confirm, setConfirm] = useState(false);
  const [balance, setBalance] = useState("0.00");
  
  const handleConfirmation = () => {
    setBalance(totalSum);
    setConfirm(true);
    onClear();
  }

  return (
    <>
      <div className="body7">
        <div className="final">
          <div className="box">
            
          </div>
          <div className="box menu">
            <button onClick={() => onClear()}>Clear Cart</button>
            <button onClick={() => handleConfirmation()}>Purchase Item</button>
            <button onClick={() => null}>Share your Purchase</button>
          </div>
        </div>
        
        {cartList.length === 0 && !confirm && <p className="empty-vessel">"Cart is currently empty"</p>}
        {cartList.length === 0 && confirm && (
          <div className="tithe">
            <h1>Thank you!</h1><br/>
            <p>Your balance is: ${balance}</p>
            <button onClick={() => setConfirm(false)}>Close Me!</button>
          </div>
        )}
        {cartList.length > 0 && (
          <div className="list scroll">
            {cartList.map(item => (
                <div key={item.product.id} className={`${cartList.length > 0 ? 'listing' : ""}`}>
                  <p>{item.product.name}</p>
                  <p>{item.pounds} lb</p><br/>
                  <p className="price">{((item.product.price * item.pounds) / 100).toFixed(2)}</p>
                  <button onClick={() => onChangingPounds(item.product.id, item.pounds - 1)}>-</button>
                  <button 
                  onClick={() => onChangingPounds(item.product.id, item.pounds + 1)} 
                  disabled={item.pounds >= item.product.stock}>
                    +
                  </button>
                <button onClick={() => onRemoveItem(item.product.id)}>Remove Item</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ListCartItems
