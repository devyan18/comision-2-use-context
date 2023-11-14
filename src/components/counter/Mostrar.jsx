import { useCounter } from "../../providers/CounterProvider";

export const Mostrar = () => {
  const { counter } = useCounter();

  return <div>count: {counter}</div>;
};
