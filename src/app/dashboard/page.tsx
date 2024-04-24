// import styled from "styled-components";
import {
  add,
  divide,
  multiple,
  subtract,
} from "../../../components/calculator";

const dashboard = () => {
  const imgArray = new Array(1000).fill(null);
  const addFunction = add(1, 3);
  const subtractFunction = subtract(1, 3);
  const multipleFunction = multiple(1, 3);
  const divideFunction = divide(1, 3);

  return (
    <div>
      <div>{`${addFunction},${subtractFunction},${multipleFunction},${divideFunction}`}</div>
      {imgArray.map((value, index) => (
        <div>
          <span>{index}</span>
          <img src="https://m.thetamina.com/web/product/big/201704/159_shop1_925391.jpg" />
        </div>
      ))}
      {/* <StEx></StEx> */}
    </div>
  );
};

// const StEx = styled.div`
//   width: 100px;
// `;

export default dashboard;
