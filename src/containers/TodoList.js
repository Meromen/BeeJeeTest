import React from 'react';
import {Container} from 'react-bootstrap';
import TodoItem from '../components/TodoItem'
import ReactPaginate from 'react-paginate';

class TodoList extends React.Component{


  render() {
    return(
      <Container>
        <TodoItem name={"meromen"} text={"asdasd"} date={"asdfa"}/>
        <TodoItem name={"meromen"} text={"asdasd"} date={"asdfa"}/>
        <TodoItem name={"meromen"} text={"asdasd"} date={"asdfa"}/>
        <ReactPaginate previousLabel={'<'}
                       nextLabel={'>'}
                       breakLabel={'...'}
                       breakClassName={'break-me'}
                       pageCount={10}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={'pagination'}
                       subContainerClassName={'pages pagination'}
                       activeClassName={'active'}/>
      </Container>
      )
  }
}

export default TodoList