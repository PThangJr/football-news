import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Auth from '../components/auth/Auth';
import News from '../components/body/news/News';
import NewsDetails from '../components/body/news/pages/NewsDetails';
import Trending from '../components/body/trending/Trending';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SidebarLeft from '../features/sidebar-left/SidebarLeft';
import '../scss/main.scss';
import NotFoundPage from './NotFoundPage';
const HomePage = (props) => {
  const formAuth = useSelector((state) => state.displayAuth);
  const { isAuth } = formAuth;
  const match = useRouteMatch();
  // console.log(match);
  return (
    <div className="wrapper">
      <ToastContainer />
      <SidebarLeft />
      <aside className="sidebar-right">
        <Header />
        <main className="body">
          <Trending />
          <div className="main-body">
            <Switch>
              <Route path={`/`} exact component={News} />
              <Route path={`/news/premier-league`} component={News} />
              <Route path={`/news/la-liga`} component={News} />
              <Route path={`/news/serie-a`} component={News} />
              <Route path={`/news/bundesliga`} component={News} />
              <Route path={`/news/ligue-1`} component={News} />
              <Route path={`/detail-page/:slug`} component={NewsDetails} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </main>
        <Footer />
      </aside>
      <div className="modal-exit d-none"> </div>
      {isAuth && <Auth />}
    </div>
  );
};

export default HomePage;
