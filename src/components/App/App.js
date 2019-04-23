import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import Movies from '../pages/Movies/MoviesContainer';
import MoviePage from '../pages/Movies/MoviePage/MoviePageContainer';
import ActorPage from '../pages/Actor/ActorContainer';
import Footer from '../pages/Footer/Footer';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route path="/actor/:credit_id" component={ActorPage} />
        <Route path="/movieId/:id" component={MoviePage} />
        <Route path="/movie/:sort" component={Movies} />
        <Route path="/genre/:id" component={Movies} />
        <Route path="/" component={Movies} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
