
import { type ProductInfo } from "./type";
import placeholder from "./../assets/placeholder_logo.png"
type ProductDetailedProp = {
  product: ProductInfo;
  status: number;
}

function ProductDetailed({product, status}: ProductDetailedProp) {
  const finalizedPrice = (product.price / 100).toFixed(2); 
  return (
    <>
      <div className="product_detail">
        <div className="row">
          <div className="col-md-6">
            <div className="section">
              <div>
                <h1 className="title">{product.name}</h1>
              </div>
              <div className="base">
                <p>Number Available: {status} lb</p><br/>
                <p>Price: {finalizedPrice} per pound</p>
                <p>Type: {product.category}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="base">
              <p>{(product.manufacturer)}</p>
              <img src={product.logo ?? placeholder} className="photo" alt={`${product.name} logo`} />
            </div>
          </div>
          <div className="health">
            <div className="base wide">
              <div className="title">
                <p>Health Disclaimer</p>
              </div>
              <div className="content">
                <p>{product.healthIntel || "Health Information currently unavailable"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailed