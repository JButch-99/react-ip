import { useState } from "react";
import NewSubmissionForm from "./form";
import { type CartItem, type ProductInfo  } from "./type";
import OptionBar from "./optionbars";
import ProductDetailed from "./ProductDetail";
import ListCartItems from "./CartBar";

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

  function handlePoundUpdate(productId: string, aim: number) {
    if (Number.isNaN(aim)) return;

    const target = cartList.find(item => item.product.id === productId);
    if (!target) return;

    if (aim <= 0) {
      setCartList(prev => prev.filter(item => item.product.id !== productId));
      return;
    }

    setCartList(prev => prev.map(item => item.product.id === productId ? {...item, pounds: aim} : item))
  }

  function handleAddingNewInfo(product: ProductInfo) {
    setCartList(prev => [...prev, {product, pounds: 0}])
  }

  return (
      <>
        <OptionBar onSelectProduct={handleSelectingProduct} />
        
        {selectedProduct && (
          <ProductDetailed
            product={selectedProduct}
          />
        )}

        <ListCartItems 
          cartList={cartList}
          onRemoveItem={removeTarget}
          onClear={clearCart}
          onChangingPounds={handlePoundUpdate}
        />

        <NewSubmissionForm onSubmitItem={handleAddingNewInfo}/>
      </>
    )
}

export default ProductControlHub