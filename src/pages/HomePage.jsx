import { useCounter } from "../providers/CounterProvider";

const HomePage = () => {
  const { counter, sumar } = useCounter();

  return (
    <div>
      <h1>Home page</h1>
      <p>Count: {counter}</p>
      <button onClick={sumar}>+</button>
    </div>
  );
};
export default HomePage;
