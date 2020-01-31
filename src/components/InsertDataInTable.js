import React from 'react';

const InsertDataInTable = props => {
  let reversedData = [];
  props.rows.reverse().map(item => reversedData.unshift(item));

  return (
    <tr>
    
      {reversedData.map(d => <td key={d}>{d}</td>)}
      
    
    </tr>
  );
}
export default InsertDataInTable;
