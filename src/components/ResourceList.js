import React, { useState, useEffect } from "react";

import jsonPlaceholder from "../api/jsonPlaceholder";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await jsonPlaceholder.get(`/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);

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
