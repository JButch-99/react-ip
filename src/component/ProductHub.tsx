import { useState } from "react";
import NewSubmissionForm from "./form";
import { type products, type CartItem, type ProductInfo  } from "./type";
import OptionBar from "./optionbars";
function ProductControlHub() {
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);

  function handleSelectingProduct(product: ProductInfo) {
    setSelectedProduct(product);
  }
}