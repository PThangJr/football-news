import React from 'react';
import SkeletonElement from '../SkeletonElement';

const TrendingControlsSkeleton = () => {
  return (
    <>
      <li className="trending-control">
        <SkeletonElement type="image" width={50} />
      </li>
      <li className="trending-control">
        <SkeletonElement type="image" width={50} />
      </li>
      <li className="trending-control">
        <SkeletonElement type="image" width={50} />
      </li>
      <li className="trending-control">
        <SkeletonElement type="image" width={50} />
      </li>
      <li className="trending-control">
        <SkeletonElement type="image" width={50} />
      </li>
    </>
  );
};

export default TrendingControlsSkeleton;
