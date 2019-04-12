import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import Header from '../pages/Header/HeaderContainer';
import Movies from '../pages/Movies/MoviesContainer';
import MoviePage from '../pages/Movies/MoviePage/MoviePageContainer';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Switch>
        <Route path="/movieId/:id" component={MoviePage} />
        <Route path="/movie/:sort" component={Movies} />
        <Route path="/genre/:id" component={Movies} />
        <Route path="/" component={Movies} />
      </Switch>
    </div>
  );
};

export default App;
