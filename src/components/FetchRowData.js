import React from 'react';
import InsertDataInTable from './InsertDataInTable';

class FetchRowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [], //rows represents every fetch of data so an array of 6 elements
      dataCollection: [] //empty array in which we'll add the currently fetched array
    };
  }
  //ideally we will slice the last 6 elements from the dataCollection array to render as html td elements
  addToDataCollection = () => {
    let currentArray = this.state.dataCollection;
    let currentRow = this.state.rows;
    this.setState({
      dataCollection: [...currentRow, currentRow]
    });
    this.state.dataCollection.slice(-6, this.state.dataCollection.length);
    console.log(this.state.dataCollection);
    /* this.state.rows.map(item => currentArray.push(item));
    this.setState({
      dataCollection: currentArray
    });

    console.log(this.state.dataCollection); */
  };

  fetchDataHandle = () => {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://factory-application-dev.azurewebsites.net/home/testendpoint'
    )
      .then(response => response.json())
      .then(result => this.setState({ rows: result }));
    this.addToDataCollection();
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {this.state.dataCollection.map(row => (
          <ul key={row} className='rowStyle'>
            <li>{row}</li>
          </ul>
        ))}

        <button onClick={this.fetchDataHandle}>Fetch</button>
      </React.Fragment>
    );
  }
}

export default FetchRowData;
