"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSidebar = exports.darkMode = exports.carousel = void 0;

var carousel = function carousel() {
  var trendingControls = document.querySelectorAll('.trending-control');
  var trendingItems = document.querySelectorAll('.trending-item');
  var trendingList = document.querySelector('.trending-list');
  var trendingPrev = document.querySelector('.trending__prev');
  var trendingNext = document.querySelector('.trending__next'); // const trendingActive = document.querySelector('.trending-item--active');

  var activeSlide = 0;
  var prevSlide = 0;
  var slideDuration = 0.5;
  var statusChangeSlide = true;
  var autoSlideDuration = 4.5;
  var statusAutoSlide = true;

  if (trendingItems && trendingControls) {
    trendingItems[0].classList.add('trending-item--active');
    trendingControls[0].classList.add('trending-control--active');
  }

  var changeSlide = function changeSlide() {
    // autoSlideDuration = 10;
    for (var i = 0; i < trendingItems.length; i++) {
      trendingControls[i].classList.remove('trending-control--active');

      if (trendingItems[i].classList.contains('trending-item--active')) {
        activeSlide = i;
      } // console.log(trendingControls[i]);

    }

    setTimeout(function () {
      trendingItems[activeSlide].classList.remove('trending-item--active');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = trendingItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var trendingItem = _step.value;
          trendingItem.style.animation = '';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      statusChangeSlide = true;
    }, slideDuration * 1000);
  };

  var handleNextSlide = function handleNextSlide(e) {
    if (!statusChangeSlide) return;
    changeSlide();
    var nextSlide = activeSlide + 1;

    if (activeSlide === trendingItems.length - 1) {
      nextSlide = 0;
    }

    trendingItems[activeSlide].style.animation = "trending-prev-hide ".concat(slideDuration, "s forwards");
    trendingItems[nextSlide].classList.add('trending-item--active');
    trendingItems[nextSlide].style.animation = "trending-next-show ".concat(slideDuration, "s forwards");
    trendingControls[nextSlide].classList.add('trending-control--active');
    statusChangeSlide = false;
  };

  var handlePrevSlide = function handlePrevSlide() {
    if (!statusChangeSlide) return;
    changeSlide();
    var nextSlide = activeSlide - 1;
    trendingItems[activeSlide].style.animation = "trending-next-hide ".concat(slideDuration, "s forwards");

    if (activeSlide === 0) {
      nextSlide = trendingItems.length - 1;
    }

    trendingItems[nextSlide].classList.add('trending-item--active');
    trendingItems[nextSlide].style.animation = "trending-prev-show ".concat(slideDuration, "s forwards");
    trendingControls[nextSlide].classList.add('trending-control--active');
    statusChangeSlide = false;
  };

  var setTimeOutSlide = function setTimeOutSlide() {
    statusAutoSlide = false;
    setTimeout(function () {
      statusAutoSlide = true;
    }, autoSlideDuration * 1000);
  };

  trendingNext.addEventListener('click', function () {
    setTimeOutSlide();
    handleNextSlide();
  });
  trendingPrev.addEventListener('click', function () {
    setTimeOutSlide();
    handlePrevSlide();
  });

  var nextControl = function nextControl(i) {
    if (!statusChangeSlide) return;

    for (var _i = 0; _i < trendingControls.length; _i++) {
      trendingControls[_i].classList.remove('trending-control--active');
    }

    trendingControls[i].classList.add('trending-control--active');

    for (var _i2 = 0; _i2 < trendingItems.length; _i2++) {
      if (trendingItems[_i2].classList.contains('trending-item--active')) {
        activeSlide = _i2;
      }
    }

    statusChangeSlide = false;
    prevSlide = activeSlide;
    trendingControls[i].classList.add('trending-control--active');
    activeSlide = i;
    var changeSlide = 0;

    if (prevSlide < activeSlide) {
      for (var _i3 = prevSlide; _i3 <= activeSlide; _i3++) {
        trendingItems[_i3].classList.add('trending-item--active');

        trendingItems[_i3].style.transform = "translateX(".concat(changeSlide * 100, "%)");
        changeSlide++;
      }

      trendingList.style.transform = "translateX(-".concat((activeSlide - prevSlide) * 100, "%)");
      trendingList.style.transition = "".concat(slideDuration, "s");
      setTimeout(function () {
        for (var _i4 = prevSlide; _i4 <= activeSlide; _i4++) {
          trendingItems[_i4].style.transform = "none";
          trendingList.style.transform = "none";
          trendingList.style.transition = "none";

          trendingItems[_i4].classList.remove('trending-item--active');

          if (_i4 === activeSlide) {
            trendingItems[_i4].classList.add('trending-item--active');
          }
        }

        changeSlide = 0;
        statusChangeSlide = true;
      }, slideDuration * 1000);
    } else if (prevSlide > activeSlide) {
      for (var _i5 = prevSlide; _i5 >= activeSlide; _i5--) {
        trendingItems[_i5].classList.add('trending-item--active');

        trendingItems[_i5].style.transform = "translateX(-".concat(changeSlide * 100, "%)");
        changeSlide++;
      }

      trendingList.style.transform = "translateX(".concat((prevSlide - activeSlide) * 100, "%)");
      trendingList.style.transition = "".concat(slideDuration, "s");
      setTimeout(function () {
        for (var _i6 = prevSlide; _i6 >= activeSlide; _i6--) {
          trendingItems[_i6].style.transform = "none";
          trendingList.style.transform = "none";
          trendingList.style.transition = "none";

          trendingItems[_i6].classList.remove('trending-item--active');

          if (_i6 === activeSlide) {
            trendingItems[_i6].classList.add('trending-item--active');
          }
        }

        changeSlide = 0;
        statusChangeSlide = true;
      }, slideDuration * 1000);
    } else if (prevSlide === activeSlide) {
      setTimeout(function () {
        statusChangeSlide = true;
      }, slideDuration * 1000);
    }
  };

  var _loop = function _loop(i) {
    trendingControls[i].addEventListener('click', function () {
      nextControl(i);
      setTimeOutSlide();
    });
  };

  for (var i = 0; i < trendingControls.length; i++) {
    _loop(i);
  }

  setInterval(function () {
    return statusAutoSlide ? handleNextSlide() : false;
  }, autoSlideDuration * 1000);
}; // carousel();


exports.carousel = carousel;

var toggleSidebar = function toggleSidebar() {
  var menuNavbar = document.querySelectorAll('.navbar__menu-icon')[0];
  var iconSearch = document.querySelectorAll('.navbar__menu-icon')[1];
  var sidebar = document.querySelector('.sidebar');
  var modalExit = document.querySelector('.modal-exit');
  var iconCloseSideBar = document.querySelector('.sidebar .icon-close');
  var sidebarItems = document.querySelectorAll('.sidebar__item');
  menuNavbar.addEventListener('click', function () {
    sidebar.classList.add('sidebar--show');
    modalExit.classList.remove('d-none');
  });
  iconSearch.addEventListener('click', function () {
    var search = document.querySelector('.search');
    search.classList.toggle('search--show-on-mobile');
  });

  var exitSidebar = function exitSidebar() {
    sidebar.classList.remove('sidebar--show');
    modalExit.classList.add('d-none');
  };

  sidebarItems.forEach(function (item) {
    item.addEventListener('click', function () {
      sidebar.classList.remove('sidebar--show');
      modalExit.classList.add('d-none');
    });
  });
  iconCloseSideBar.addEventListener('click', exitSidebar);
  modalExit.addEventListener('click', exitSidebar);
}; // toggleSidebar();


exports.toggleSidebar = toggleSidebar;

var darkMode = function darkMode() {
  var btnDarkMode = document.querySelector('.dark-mode');
  var darkModeBox = document.querySelector('.dark-mode__box');
  var darkModeName = document.querySelector('.dark-mode__name');
  var wrapper = document.querySelector('.wrapper');
  btnDarkMode.addEventListener('click', function (e) {
    darkModeBox.classList.toggle('dark-mode__box--active');
    wrapper.classList.toggle('dark-theme');

    if (darkModeName.innerText === 'Dark Mode') {
      darkModeName.innerText = 'Light Mode';
    } else {
      darkModeName.innerText = 'Dark Mode';
    }
  });
}; // darkMode();
// export default carousel;


exports.darkMode = darkMode;