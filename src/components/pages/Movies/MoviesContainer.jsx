import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSuccessMovies } from '../../../modules/operations';
import {
  getMovies,
  getSearchMovie,
  getGenres,
} from '../../../modules/selectors';

import MoviesView from './MoviesView';
import Pagination from '../Pagination/Pagination';
import styles from './Movies.module.css';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchSuccessMovies(`popularity.desc`);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchSuccessMovies(
        `&with_genres=${this.props.match.params.id}`,
      );
    }
    if (this.props.match.params.sort !== prevProps.match.params.sort) {
      this.props.fetchSuccessMovies(this.props.match.params.sort);
    }
  }

  moviesList = () => {
    const { movies, searchMovie } = this.props;
    let arr = [];
    if (searchMovie) {
      arr = searchMovie;
    } else {
      arr = movies;
    }
    return arr;
  };

  render() {
    return (
      <div className={styles.container}>
        <MoviesView movies={this.moviesList()} />
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: getMovies(state),
  searchMovie: getSearchMovie(state),
  genres: getGenres(state),
});
const mapDispatchToProps = { fetchSuccessMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
