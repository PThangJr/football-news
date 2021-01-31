import React from 'react';
import SkeletonElement from '../SkeletonElement';

const NewsDetailSkeleton = () => {
  return (
    <div>
      <div className="detail-skeleton__heading">
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <SkeletonElement type="text" height={65} />
            <SkeletonElement type="text" cName="mt-10" height={20} width={100} />
            <SkeletonElement type="text" cName="mt-10" height={15} width={100} />
            <SkeletonElement type="text" cName="mt-10" height={15} />
            <SkeletonElement type="text" cName="mt-10" height={300} />
            <SkeletonElement type="text" cName="mt-10" height={100} />
            <SkeletonElement type="text" cName="mt-10" height={50} />
            <SkeletonElement type="text" cName="mt-10" height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailSkeleton;
