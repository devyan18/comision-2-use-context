import { useCounter } from "../../providers/CounterProvider";

export const Sumar = () => {
  const { sumar } = useCounter();
  return <button onClick={sumar}>+</button>;
};
