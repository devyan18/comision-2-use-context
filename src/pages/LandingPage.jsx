import { useCounter } from "../providers/CounterProvider";

const LandingPage = () => {
  const { counter, restar } = useCounter();

  return (
    <div>
      <h1>Langing page</h1>
      <p>Count: {counter}</p>
      <button onClick={restar}>-</button>
    </div>
  );
};
export default LandingPage;

// useState, useEffect (ciclo de vida de un componente)
// useContext
