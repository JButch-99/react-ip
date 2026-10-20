import { type SubmitEvent } from "react";
import { type ProductInfo } from "./type";

type OverlayProps = {
  formSubmissionHandler: (event: SubmitEvent<HTMLFormElement>) => void;
  buttonText: string;
  defaultInfo?: Partial<ProductInfo>
}

function GraftedForm({formSubmissionHandler, buttonText}: OverlayProps) {
  return (
    <form onSubmit={formSubmissionHandler}>
      <input type="number" name="pounds" min={1} defaultValue={1} required />
      <button>{buttonText}</button>
    </form>
  )
}

export default GraftedForm