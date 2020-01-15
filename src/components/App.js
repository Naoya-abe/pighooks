import React from "react";

// import ResourceList from "./ResourceList";

class App extends React.Component {
  state = { resource: "post" };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div>
          <button
            className="ui button primary"
            onClick={() => this.setState({ resource: "post" })}
          >
            Posts
          </button>
          <button
            className="ui button red"
            onClick={() => this.setState({ resource: "todo" })}
          >
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;
