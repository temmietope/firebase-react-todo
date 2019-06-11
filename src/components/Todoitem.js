import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f4f4f4'}}>
                <p>{this.props.todos.title }</p>
            </div>
        )
    }
}

//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }
export default TodoItem