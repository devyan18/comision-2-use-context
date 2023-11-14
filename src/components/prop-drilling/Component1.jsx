import { useUsername } from "../../providers/UsernameProvider";
import { Component2 } from "./Component2";

export const Component1 = () => {
  const { username } = useUsername();

  return (
    <div>
      <p>
        Component 1: <b>{username}</b>
      </p>
      <Component2 />
    </div>
  );
};
