import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = e => {
      this.setState({term: e.target.value})
    }

    this.onFormSubmit = e => {
      e.preventDefault()

      this.props.fetchWeather(this.state.term)
      this.setState({term: ''})
    }
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
          placeholder="Get a forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)