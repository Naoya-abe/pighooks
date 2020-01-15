import React from "react";

import useResources from "../utils/useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <div className="ui bulleted list">
      {resources.map(item => {
        return (
          <div className="item" key={item.id}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default ResourceList;
