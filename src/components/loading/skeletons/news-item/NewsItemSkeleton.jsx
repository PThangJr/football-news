import React from 'react';
import SkeletonElement from '../SkeletonElement';

const CardNewSkeleton = (props) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="card">
        <div className="card-box">
          <div className="card__top">
            <div className="card__image">
              <SkeletonElement type="image" height={160} />
            </div>
          </div>
          <div className="card__body">
            <SkeletonElement type="text" height={30} />
            <SkeletonElement type="text" cName="mt-10 card__views" width={100} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

CardNewSkeleton.propTypes = {};

export default CardNewSkeleton;
