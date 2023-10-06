import "./Input.css";
import { Buttons } from "../buttons/Buttons";
import { useState } from "react";
export const Inputs = (props) => {
  const [inputValue, setInputValue] = useState({
    "input-one": 0,
    "input-two": 0,
    "input-three": 0,
    "input-four": 0,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [id]: value,
    }));
  };

  const handleValue = (event) => {
    event.preventDefault();
    props.onData(inputValue)
    // console.log(inputValue);
  };

  return (
    <>
      <label>
        InputOne :
        <input
          type="number"
          min={0}
          id="input-one"
          value={inputValue["input-one"]}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>
        InputTwo :
        <input
          type="number"
          min={0}
          id="input-two"
          value={inputValue["input-two"]}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>
        InputThree :
        <input
          type="number"
          min={0}
          id="input-three"
          value={inputValue["input-three"]}
          onChange={handleInputChange}
        ></input>
      </label>
      <label>
        InputFour :
        <input
          type="number"
          min={0}
          id="input-four"
          value={inputValue["input-four"]}
          onChange={handleInputChange}
        ></input>
      </label>
      {/* <Buttons></Buttons> */}
      <button onClick={handleValue}>ok</button>
    </>
  );
};
