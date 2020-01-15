import React from "react";

import useResources from "../utils/useResources";

const UserList = () => {
  const users = useResources("users");
  return (
    <div>
      {users.map(user => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default UserList;
