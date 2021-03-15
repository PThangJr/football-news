import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="content">
        <h2 className="not-found__heading">Oops! Page Not Found</h2>
        <h2 className="not-found__code">404</h2>
        <p className="not-found__description">We can't find the page you're looking for</p>
        <a href="/" className="btn btn--primary btn--go-back">
          <span className="icon-back mr-8">
            <i class="fas fa-arrow-left"></i>
          </span>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
