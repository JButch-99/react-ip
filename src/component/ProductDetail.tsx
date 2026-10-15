import { type ProductInfo } from "./type";
import placeholder from "./../assets/placeholder_logo.png"
type ProductDetailedProp = {
  product: ProductInfo;
}

function ProductDetailed({product}: ProductDetailedProp) {

  return (
    <>
      <div className="product_detail body8">
        <div className="row">
          <div className="col-md-6">
            <div className="section">
              <div>
                <h1 className="title">{product.name}</h1>
              </div>
              <div className="base">
                <p>Number Available: {product.stock} lb</p><br/>
                <p>Price: {(product.price).toFixed(2)} per pound</p>
                <p>Type: {product.category}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="base">
              <p>{(product.manufacturer)}</p>
              <img src={product.logo ?? placeholder} alt={`${product.name} logo`} />
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