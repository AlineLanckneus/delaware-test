import React from 'react';
import InsertDataInTable from './InsertDataInTable';

class FetchRowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      dataCollection: []
    };
  }
  addToDataCollection = () => {
    let currentArray = this.state.dataCollection;
    this.state.rows.map(item => currentArray.push(item));
    this.setState({
      dataCollection: currentArray
    });

    console.log(this.state.dataCollection);
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
