import { useMealsListContext } from "./Providers/MealsProvider";
const Counter = () => {
  const { meals } = useMealsListContext();
  return (
    <div>
      <h3>Number Of Meals Today : {meals.length}</h3>
   
    </div>
  );
};
export default Counter;
