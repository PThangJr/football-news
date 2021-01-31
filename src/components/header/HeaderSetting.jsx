import React from 'react';
import Swal from 'sweetalert2';

const HeaderSetting = (props) => {
  const handleLogout = () => {
    const { handleLogout } = props;
    if (handleLogout) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Đăng xuất tài khoản',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đăng xuất',
      }).then((result) => {
        if (result.isConfirmed) {
          handleLogout();
          Swal.fire('Đăng xuất!', 'Bạn đã đăng xuất thành công.', 'success');
        }
      });
    }
  };
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <ul onClick={handleStopPropagation} className="account__setting-list">
      <li className="account__setting-item">Thông tin tài khoản</li>
      <li className="account__setting-item">Đổi mật khẩu</li>
      <li onClick={handleLogout} className="account__setting-item">
        Đăng xuất <i className="fas fa-sign-out-alt"></i>
      </li>
    </ul>
  );
};

HeaderSetting.propTypes = {};

export default HeaderSetting;
