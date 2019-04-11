import React from 'react';
import { connect } from 'react-redux';
import {changeStyle} from '../../redux/actions/index';

const Toggle = ({changeStyle}) => {
  return (
    <div onClick={changeStyle}>Toggle</div>
  )
}

export default connect(null, {changeStyle})(Toggle);