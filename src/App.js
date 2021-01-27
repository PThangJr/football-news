import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Auth from './components/auth/Auth';
import News from './components/body/news/News';
import NewsDetails from './components/body/news/pages/NewsDetails';
import UEFAChampionLeague from './components/body/news/tournament/UEFAChampionLeague';
import UEFAEuropaLeague from './components/body/news/tournament/UEFAEuropaLeague';
import Trending from './components/body/trending/Trending';
import Footer from './components/footer/Footer';
import Header from './components/header/Header.jsx';
import SidebarLeft from './features/sidebar-left/SidebarLeft';
import './scss/main.scss';
const App = () => {
  const formAuth = useSelector((state) => state.displayAuth);
  const { isAuth } = formAuth;
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/user/refresh_token')
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <div className="wrapper">
      <ToastContainer />
      <SidebarLeft foo="bar" />
      <aside className="sidebar-right">
        {}
        <Header />
        <main className="body">
          <Trending />
          <div className="main-body">
            <Switch>
              <Route path="/" exact component={News} />
              <Route path="/home" exact render={(props) => <News {...props} />} />
              <Route path="/premier-league" exact component={News} />
              <Route path="/la-liga" component={News} />
              <Route path="/serie-a" component={News} />
              <Route path="/ligue-1" component={News} />
              <Route path="/bundesliga" component={News} />
              <Route path="/UEFA-champion-league" component={UEFAChampionLeague} />
              <Route path="/UEFA-europa-league" component={UEFAEuropaLeague} />
              <Route path="/detail-page/:newId" component={NewsDetails} />
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

export default App;
