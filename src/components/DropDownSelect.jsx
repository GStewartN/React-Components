import React from 'react'

class DropDownSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Dogs'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value='Cats'>Cats</option>
          <option value='Dogs'>Dogs</option>
          <option value='Birbs'>Birbs</option>
          <option value='Sneks'>Sneks</option>
        </select>
        <p>Your current selection is: {this.state.value}</p>
        {this.props.children}
      </div>
    )
  }
}

export default DropDownSelect;
