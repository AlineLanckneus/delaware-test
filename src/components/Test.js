import React, { Component } from 'react';
const array = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e',
  'a',
  'b',
  'c',
  'd',
  'e'
];
let newData = Array(6);
//extract the first 6 elements from index 0 to 5 and put them in slicedArray
let slicedArray = array.slice(0, 5);
/** extracts last 5 elements
 * let slicedArray = array.slice(-5, array.length);
 * console.log(slicedArray);
 * so either add fetched array to one long array and get the last 5 elements with
 * splice and negative argument
 * either use spread operator to make array of arrays and then get last array?
 * which would be length of array minus 1 */

console.log(slicedArray);
//console.log(slicedArray.reverse());
//declare empty array restArray
let restArray = [1, 2, 3, 4, 5];
//declare restArrayAdded and set it equal to concatenation of slicedArray and empty array restArray
let restArrayAdded = [[...slicedArray], [...restArray]];
//result is array of separate arrays
console.log(restArrayAdded);

slicedArray.map(i => newData.push(i));
console.log(newData);
newData.unshift(array);
console.log(newData);
console.log(array);
array.map(item => newData.push(item));
console.log(newData);

export class Test extends Component {
  state = {
    data: array
  };

  render() {
    return (
      <div>
        <p>test</p>
        <table>
          {' '}
          <thead>
            {' '}
            <tbody>
              <tr>
                {this.state.data.reverse().map(item => (
                  <td>{item}</td>
                ))}
              </tr>
            </tbody>{' '}
          </thead>{' '}
        </table>
      </div>
    );
  }
}

export default Test;
