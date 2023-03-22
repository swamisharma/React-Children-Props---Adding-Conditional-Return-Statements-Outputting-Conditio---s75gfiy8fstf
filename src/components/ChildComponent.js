import React from 'react';

function ChildComponent({ input }) => {
  return (
    <div id="child">
      Find The Square <br/>
      {input}
    </div>
  );
};

export default ChildComponent;
