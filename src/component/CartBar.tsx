import { type CartItem } from "./type";

type CartBarProps = {
  list: CartItem[]
  onChangingPounds: (productId: string, aim: number) => void;
  onRemoveItem: (productId: string) => void;
}

function ListCartItems({}:CartBarProps) {

}

export default ListCartItems
