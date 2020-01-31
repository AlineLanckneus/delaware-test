import React from 'react';

const EmptyTable = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <button onClick={props.click}></button>
    </React.Fragment>
  );
};

export default EmptyTable;
