import React from 'react';
import InsertDataInTable from './InsertDataInTable';
import EmptyTable from './EmptyTable';
class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displayEmptyTable: true,
      counter: []
    };
  }
  componentDidMount() {
    this.setState({ displayEmptyTable: true });
  }
  fetchDataHandle = () => {
    let count = [];
    fetch(
      'https://cors-anywhere.herokuapp.com/https://factory-application-dev.azurewebsites.net/home/testendpoint'
    )
      .then(response => response.json())
      .then(result => this.setState({ data: result }));
    this.setState({ displayEmptyTable: false });
    count.push(this.state.result);
  };

  render() {
    const { data, displayEmptyTable, counter } = this.state;
    return (
      <React.Fragment>
        {this.state.displayEmptyTable ? (
          <EmptyTable />
        ) : (
          <InsertDataInTable
            data={data}
              displayEmptyTable={displayEmptyTable}
              counter={counter}
          />
        )}
        <div>
          <button onClick={this.fetchDataHandle}>Fetch Data</button>
        </div>
      </React.Fragment>
    );
  }
}
export default FetchData;
