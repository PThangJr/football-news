import React from 'react';
import SkeletonElement from '../SkeletonElement';

const TrendingSkeleton = () => {
  return (
    <>
      <li className="trending-item trending-item--active">
        <SkeletonElement type="image" />
      </li>
    </>
  );
};

export default TrendingSkeleton;
