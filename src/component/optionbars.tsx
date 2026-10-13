
import { products, type ProductInfo} from "./type"

type OptionProps = {
  onSelectProduct: (product: ProductInfo) => void;
}

function OptionBar({onSelectProduct}: OptionProps) {
  return(
    <>
      <div className="body2">
        {products.slice(0, 3).map(p => (
          <button key={p.id} onClick={() => onSelectProduct(p)}>{p.name}</button>
        ))}
      </div>
      <div className="body3">
        {products.slice(3, 6).map(p => (
          <button key={p.id} onClick={() => onSelectProduct(p)}>{p.name}</button>
        ))}
      </div>
      <div className="body4">
        {products.slice(6, 9).map(p => (
          <button key={p.id} onClick={() => onSelectProduct(p)}>{p.name}</button>
        ))}
      </div>
    </>
  );
}

export default OptionBar 