import { useState } from "react";
import NewSubmissionForm from "./form";
import { type CartItem, type ProductInfo  } from "./type";
import OptionBar from "./optionbars";
import ProductDetailed from "./ProductDetail";
import ListCartItems from "./CartBar";

function ProductControlHub() {
  const [cartList, setCartList] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);
  // const [savedList, setSavedList] = useState<CartItem[]>([]);
  const cartPriceFinder = cartList.find(item => item.product.id === selectedProduct?.id)?.pounds ?? 0;
  
  
  function handleSelectingProduct(product: ProductInfo) {
    setSelectedProduct(product);
  }

  // function handleSavingOrder() {

  // }

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

  function handleAddingNewInfo(product: ProductInfo, pounds: number) {
    if (Number.isNaN(pounds) || pounds <= 0) return;

    const amountList = Math.min(pounds, product.stock);

    setCartList(prev => {
      const evident = prev.some(item => item.product.id === product.id);

      if (!evident) {
        return [...prev, {product, pounds: amountList}];
      }

      return prev.map(item =>
        item.product.id === product.id
        ? {...item, pounds: Math.min(item.pounds + amountList, product.stock) }
        : item
      )
    })
  }

  return (
      <>
        <OptionBar onSelectProduct={handleSelectingProduct} />
        
        {selectedProduct && (
          <div className="body8">
            <ProductDetailed
              product={selectedProduct}
              key={selectedProduct.id}
              status={selectedProduct.stock - cartPriceFinder}
            />
          </div>
        )}

        <ListCartItems 
          cartList={cartList}
          onRemoveItem={removeTarget}
          onClear={clearCart}
          onChangingPounds={handlePoundUpdate}
        />

        <NewSubmissionForm 
        onSubmitItem={handleAddingNewInfo}
        key={selectedProduct?.id}
        product={selectedProduct}
        />
      </>  
    )
}

export default ProductControlHub