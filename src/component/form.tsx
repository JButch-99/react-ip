import { type SubmitEvent } from "react";
import { type ProductInfo } from "./type";
import GraftedForm from "./ReuseForm";
type newSubmissionFormProps = {
  onSubmitItem: (Product: ProductInfo) => void;
  initialProduct: Partial<ProductInfo >
}


function NewSubmissionForm({onSubmitItem}: newSubmissionFormProps) {
  function handleNewSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const returnData: ProductInfo = {
      id: String(formData.get("id")),
      name: String(formData.get("name")),
      stock: Number(formData.get("stock")),
      healthIntel: String(formData.get("healthIntel")),
      manufacturer: String(formData.get("manufacturer")),
      price: Number(formData.get("price")),
      category: formData.get("category") as "Regular" | "Decaf" | "Specialty"
    }

    onSubmitItem(returnData);
    event.currentTarget.reset();
  }

  return (
    <div className="body5">
      <GraftedForm
        formSubmissionHandler={handleNewSubmission}
        buttonText="Submit Item"
      />
    </div>
  )
}

export default NewSubmissionForm;