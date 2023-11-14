import { useCounter } from "../../providers/CounterProvider";

export const Restar = () => {
  const { restar } = useCounter();
  return <button onClick={restar}>-</button>;
};
