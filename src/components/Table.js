import React, { Component } from 'react';
import FetchRowData from './FetchRowData';

class Table extends Component {
  render() {
    return (
      <div className='main'>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <FetchRowData />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
