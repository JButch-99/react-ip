import { useState } from "react";
import NewSubmissionForm from "./form";
import { type CartItem, type ProductInfo  } from "./type";
import OptionBar from "./optionbars";
// import ProductDetailed from "./ProductDetail";

function ProductControlHub() {
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);

  function handleSelectingProduct(product: ProductInfo) {
    setSelectedProduct(product);
  }


  function clearCart() {
    setCartList([]);
  }

  function removeTarget(productId: string) {
    setCartList(prev => prev.filter(item => item.product.id !== productId))
  }

  return (
      <>
        <OptionBar onSelectProduct={handleSelectingProduct} />
        
      </>
    )
}

export default ProductControlHub