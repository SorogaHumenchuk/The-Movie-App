import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSuccessMovies } from '../../../modules/operations';
import { getMovies, getGenres } from '../../../modules/selectors';
import HeaderContainer from '../Header/HeaderContainer/HeaderContainer';
import MoviesView from './MoviesView';
import Pagination from '../Pagination/Pagination';
import styles from './Movies.module.css';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchSuccessMovies(`popularity.desc`);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.id !== prevProps.match.params.id &&
      this.props.match.params.id
    ) {
      this.props.fetchSuccessMovies(
        `&with_genres=${this.props.match.params.id}`,
      );
    }
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchSuccessMovies(
        `&with_genres=${this.props.match.params.id}`,
      );
    }

    if (this.props.match.params.sort !== prevProps.match.params.sort) {
      this.props.fetchSuccessMovies(this.props.match.params.sort);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <HeaderContainer />

        <MoviesView movies={this.props.movies} />

        <Pagination
          id={this.props.match.params.id}
          sort={this.props.match.params.sort}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: getMovies(state),

  genres: getGenres(state),
});

const mapDispatchToProps = { fetchSuccessMovies };

export default connect(
  mapStateToProps,

  mapDispatchToProps,
)(MainContainer);
