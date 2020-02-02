
import React from 'react';
import './App.css';
import FetchRowData from './components/FetchRowData';
import InsertDataInTable from './components/InsertDataInTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
      dataCollection: []
    };
  }
  render() {
    const fetchDataHandle = () => {
      fetch(
        'https://cors-anywhere.herokuapp.com/https://factory-application-dev.azurewebsites.net/home/testendpoint'
      )
        .then(response => response.json())
        .then(result =>
          this.setState({
            rows: result.reverse()
          })
        );
    };
    this.state.dataCollection.unshift(this.state.rows);

    return (
      <div>
        <h1>Delaware Test</h1>
        <FetchRowData click={this.fetchDataHandle} />
        <table>
          <thead>
            <tbody>
              {this.state.dataCollection.map(function(item) {
                return <InsertDataInTable rowData={item} />;
              })}
            </tbody>
          </thead>
        </table>
      </div>
    );
  }
}

export default App;

