import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectBook} from '../actions/index'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book, i) => {
      return <li 
        key={i} 
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
      >
        {book.title}
      </li>
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props on the BookList container  
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to all of our reducers
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch)
}

// promote BookList from a component (dumb) to a container (smart). It needs 
// to know about this new dispatch method, selectBook. 
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)