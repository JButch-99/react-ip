import { type SubmitEvent } from "react";
import { type ProductInfo } from "./type";

type Overlay = {
  formSubmissionHandler: (event: SubmitEvent<HTMLFormElement>) => void;
  buttonText: string;
  defaultValue: ProductInfo
}

function GraftedForm({formSubmissionHandler, buttonText, defaultValue}: Overlay) {
  return (
    <form onSubmit={formSubmissionHandler}>
      <input 
        type="text"
        name="id"
      />
      <button>{buttonText}</button>
    </form>
  )
}