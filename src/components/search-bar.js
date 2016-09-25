import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onKeyPress(e) {
    if (e.key === 'Enter') return this.props.onTermChange(this.state.term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e)}
          onKeyPress={e => this.onKeyPress(e)}
        />
      </div>
    )
  }
}

export default SearchBar