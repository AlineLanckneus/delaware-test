import React, { Component } from 'react';
import Button from '../components/Button';

class Table extends Component {
  render() {
    return (
      <div className='main'>
        <table>
          <thead></thead>
          <tbody>
            <Button />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
