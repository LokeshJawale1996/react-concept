import { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
  return new Error();
};
function UseReducer() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button className="bg-red-600 p-2 mr-2" onClick={() => dispatch({ type: "ride" })}>
          A new customer!
        </button>
        <button className="bg-blue-400 p-2 mr-2" onClick={() => dispatch({ type: "fuel" })}>
          Refill the tank!
        </button>
      </div>
    </div>
  );
}
export default UseReducer;
