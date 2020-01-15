import React, { useState } from "react";

import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <div>
        <button
          className="ui button primary"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button className="ui button red" onClick={() => setResource("todos")}>
          Todos
        </button>
      </div>
      {resource}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
