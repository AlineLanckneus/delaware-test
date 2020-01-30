import React, { Component } from 'react';
import FetchData from './FetchData';

class Table extends Component {
  render() {
    return (
      <div className='main'>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <FetchData />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
