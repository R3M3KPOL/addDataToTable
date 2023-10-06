import "./Table.css";

export const Table = (props) => {

  return (
    <table className="tableContainer">
      <thead>
        <tr>
          <th>Input Value One:</th>
          <th>Input Value Two:</th>
          <th>Input Value Three:</th>
          <th>Input Value Four:</th>
        </tr>
      </thead>
      <tbody>
        {props.onY.map((element, index) => (
          <tr key={index}>
            <td>{element.valueOne}</td>
            <td>{element.valueTwo}</td>
            <td>{element.valueThree}</td>
            <td>{element.valueFour}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
