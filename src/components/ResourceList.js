import React from "react";

import jsonPlaceholder from "../api/jsonPlaceholder";

class ResourceList extends React.Component {
  state = { resources: [] };
  async componentDidMount() {
    const response = await jsonPlaceholder.get(`/${this.props.resource}`);
    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await jsonPlaceholder.get(`/${this.props.resource}`);
      this.setState({ resources: response.data });
    }
  }

  render() {
    return (
      <div className="ui bulleted list">
        <div className="item">{this.state.resources.length}</div>
      </div>
    );
  }
}

export default ResourceList;
