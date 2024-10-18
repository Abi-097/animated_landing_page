import React, { useState } from "react";

const TreeNode = () => {
  const [integer, setInteger] = useState([3, 6]);

  const secondLargest = () => {
    integer.length;
    return;
  };

  console.log(secondLargest);
  return (
    <div>
      <button onClick={secondLargest}>Click me</button>
    </div>
  );
};

export default TreeNode;
