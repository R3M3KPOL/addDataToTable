import "./App.css";
import { FormContainer } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import { useState } from "react";
function App() {
  const [value, setValue] = useState([]);
  const handleValueFromInput = (dataInputs) => {
    setValue(dataInputs);

    if (value) {
      const updateArrValueForTable = [
        ...value,
        {
          valueOne: dataInputs["input-one"],
          valueTwo: dataInputs["input-two"],
          valueThree: dataInputs["input-three"],
          valueFour: dataInputs["input-four"],
        },
      ];
      setValue(updateArrValueForTable);
    }
  };

  return (
    <main>
      <FormContainer onX={handleValueFromInput}></FormContainer>
      <Table onY={value}></Table>
    </main>
  );
}

export default App;
