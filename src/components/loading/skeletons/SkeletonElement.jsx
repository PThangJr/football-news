import React from 'react';
import PropTypes from 'prop-types';

const SkeletonElement = (props) => {
  let { type, cName, height, width } = props;
  height = height ? `${height}px` : `100%`;
  width = width ? `${width}px` : `100%`;
  return (
    <div className={`skeleton skeleton--${type} ${cName}`} style={{ height: `${height}`, width: `${width}` }}></div>
  );
};

SkeletonElement.propTypes = {
  type: PropTypes.string,
  cName: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};
SkeletonElement.defaultProps = {
  type: '',
  cName: '',
};
export default SkeletonElement;
