import React from 'react';

const InsertDataInTable = props => {
    let reversedData = [];
    props.data.reverse().map(item => reversedData.unshift(item));
    
    return (
      <React.Fragment>
        {reversedData.map(d => (
          <td>{d}</td>
        ))}
        
      </React.Fragment>
    );
}
export default InsertDataInTable;
