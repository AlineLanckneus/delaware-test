import React from 'react';

const InsertDataInTable = props => {
  

  return (
    <React.Fragment>
    
      {props.rowData.map(rowCell => <td key={rowCell}>{rowCell}</td>)}
      
    
    </React.Fragment>
  );
}
export default InsertDataInTable;
