import { useUsername } from "../../providers/UsernameProvider";

export const Component4 = () => {
  const { username } = useUsername();

  return (
    <div>
      Component 4: <b>{username}</b>
    </div>
  );
};
