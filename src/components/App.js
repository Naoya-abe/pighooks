import React, { useState } from "react";

// import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("post");
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <div>
        <button
          className="ui button primary"
          onClick={() => setResource("post")}
        >
          Posts
        </button>
        <button className="ui button red" onClick={() => setResource("todo")}>
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};

export default App;
