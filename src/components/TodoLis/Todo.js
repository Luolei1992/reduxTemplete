import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import './index.less';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={classnames({'list':completed})}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo