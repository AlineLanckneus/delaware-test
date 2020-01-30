import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchDataHandle = () => {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://factory-application-dev.azurewebsites.net/home/testendpoint'
    )
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
      .then(console.log(this.state.data));
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchDataHandle}>Fetch</button>
        <tr>
          {this.state.data.map(item => (
            <td>{item}</td>
          ))}
        </tr>
      </div>
    );
  }
}
export default Button;
