import { type SubmitEvent } from "react";
import { type ProductInfo } from "./type";
import GraftedForm from "./ReuseForm";
type newSubmissionFormProps = {
  onSubmitItem: (product: ProductInfo, pounds: number) => void;
  product: ProductInfo | null
}

function NewSubmissionForm({product, onSubmitItem}: newSubmissionFormProps) {
  function handleNewSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!product) return;
    const formData = new FormData(event.currentTarget);
    const lb = Number(formData.get("pounds"))
    onSubmitItem(product, lb);
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