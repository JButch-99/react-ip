import { type CartItem } from "./type";

type CartBarProps = {
  cartList: CartItem[]
  onChangingPounds: (productId: string, aim: number) => void;
  onRemoveItem: (productId: string) => void;
  onClear: (productId: string) => void;
}

function ListCartItems({cartList, onChangingPounds, onRemoveItem, onClear}:CartBarProps) {
  const totalSum = cartList.reduce((sum, item) => sum * item.product.price * item.pounds, 0)
  return (
    <>
      <div className="body7">
        <div className="list">
          
        </div>
      </div>
    </>
  )
}

export default ListCartItems
