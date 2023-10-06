import { Inputs } from "../InputsContainer/Inputs";
import "./form.css";
export const FormContainer = (props) => {


  return (
    <form className="Form">
      <Inputs onData={props.onX}></Inputs>
    </form>
  );
};
