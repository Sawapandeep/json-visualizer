import React from 'react';
import { JSONTree } from 'react-json-tree';

interface JsonTreeProps {
  data: object;
}

const JsonTree: React.FC<JsonTreeProps> = ({ data }) => {
  return <JSONTree data={data} />;
};

export default JsonTree;
