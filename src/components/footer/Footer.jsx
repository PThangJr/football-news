import React from 'react';

const Footer = () => {
    return (
        <div className="footer" id="footer">
  <div className="profile-box">
    <div className="profile">
      <h3 className="profile__heading">
        Profile
      </h3>
      <div className="profile__social">
        <a href="#" className="profile__link">
          <span className="icon-social icon-social--youtube">
            <i className=" fab fa-youtube" />
          </span>
          <span className="profile__link-name">
            Youtube
          </span>
        </a>
        <a href="#" className="profile__link">
          <span className="icon-social icon-social--facebook">
            <i className=" fab fa-facebook-square" />
          </span>
          <span className="profile__link-name">
            Facebook
          </span>
        </a>
        <a href="#" className="profile__link">
          <span className="icon-social icon-social--instagram">
            <i className=" fab fa-instagram-square" />
          </span>
          <span className="profile__link-name">
            Instagram
          </span>
        </a>
      </div>
    </div>
  </div>
</div>

    );
};

export default Footer;