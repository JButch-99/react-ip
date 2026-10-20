import { type CartItem } from "./type";

type CartBarProps = {
  cartList: CartItem[]
  onChangingPounds: (productId: string, aim: number) => void;
  onRemoveItem: (productId: string) => void;
  onClear: () => void;
}

function ListCartItems({cartList, onChangingPounds, onRemoveItem, onClear}:CartBarProps) {
  const totalSum = (cartList.reduce((sum, item) => sum + item.product.price * item.pounds, 0) / 100).toFixed(2)
  return (
    <>
      <div className="body7">
        <div className="list">
          {cartList.map(item => (
            <div key={item.product.id} className="#">
              <p>{item.product.name}</p>
              <p>{item.pounds}</p>
              <p>{(item.product.price * item.pounds).toFixed(2)}</p>
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
        <div className="final">
          <div className="box">
            <h1>
              Total: {totalSum}
            </h1>
            <p>
              Number of Items: {cartList.length}
            </p>
          </div>
          <div className="box menu">
            <button onClick={() => onClear()}>Clear Cart</button>
            <button onClick={() => null}>Purchase Item</button>
            <button onClick={() => null}>Share your Purchase</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListCartItems
