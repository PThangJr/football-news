import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import parseHTML from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetchGetUser } from '../../../../app/store/Slice/Auth/getUserSlice';
import { fetchLiked, fetchNewBySlug, like } from '../../../../app/store/Slice/newDetailSlice';
import NotFoundPage from '../../../../pages/NotFoundPage';
import NewsDetailSkeleton from '../../../loading/skeletons/news-detail/NewsDetailSkeleton';
const NewsDetails = (props) => {
  // console.log('render...');
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const location = useLocation();
  const address = location.pathname.split('/');
  const slug = address[address.length - 1];
  const options = {
    slug: `/${slug}`,
  };
  useEffect(() => {
    const fetchNewDetail = async () => {
      try {
        const action = await dispatch(fetchNewBySlug(options));
        const result = unwrapResult(action);
      } catch (error) {
        if (error.status === 404) {
          const { message } = error.data.error;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            footer: '<a href="/">Quay lại trang chủ</a>',
          });
        }
      }
    };
    fetchNewDetail();
  }, [slug]);

  const currentUser = useSelector((state) => state.infoUser);
  const dataNewsFetch = useSelector((state) => state.dataNewBySlug);
  const { data, isLoading, errors } = dataNewsFetch;
  const { description, content, created_at, views, likes, _id } = data;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const action = await dispatch(fetchGetUser());
        const result = unwrapResult(action);
      } catch (error) {}
    };
    fetchUser();
  }, [likes]);

  const handleLike = async () => {
    await dispatch(fetchLiked({ slug }));
  };

  const renderNewDetail = () => {
    if (isLoading) {
      return <NewsDetailSkeleton />;
    } else {
      return (
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <div className="detail-left">
              <div className="detail-header">
                <div className="detail-header-info">
                  <h3 className="detail__heading">{description}</h3>
                  <p className="detail__created">{created_at}</p>
                  <p className="detail-views">
                    <span>Views: </span>
                    <span>{views}</span>
                    <span>Likes: </span>
                    <span>{likes?.length}</span>
                  </p>
                </div>
                <div className="detail-header-like">
                  <span
                    onClick={handleLike}
                    className={!currentUser.user.like_news?.includes(_id) ? 'icon-like' : 'icon-like icon-like--active'}
                  >
                    <i className="fas fa-thumbs-up"></i>
                  </span>
                </div>
              </div>
              <div className="detail-body">{parseHTML(content)}</div>
              <div className="detail-footer"></div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="detail-right">Adventisment</div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="detail">
      <div className="container-fluid">
        {!errors && renderNewDetail()}
        {errors?.status === 404 && <NotFoundPage />}
      </div>
    </div>
  );
};

NewsDetails.propTypes = {};

export default NewsDetails;
