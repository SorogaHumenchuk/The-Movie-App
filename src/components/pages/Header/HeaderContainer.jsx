import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from './Toolbar/Toolbar';

import {
  getGenres,
  getSearchMovie,
  getMovies,
} from '../../../modules/selectors';
import {
  fetchSuccessGenres,
  fetchSuccessSearchMovie,
  fetchSuccessMovies,
} from '../../../modules/operations';
import styles from './Header.module.css';

class Header extends Component {
  state = {
    search: '',
  };

  componentDidMount() {
    this.props.fetchSuccessGenres();
    this.getId();
  }

  handleChange = e => this.setState({ search: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchSuccessSearchMovie(this.state.search);
    this.setState({ search: '' });
  };

  getId = id => this.props.fetchSuccessMovies(`&with_genres=${id}`);

  render() {
    const { search } = this.state;
    const { genres } = this.props;
    return (
      <>
        <Toolbar search={search} genres={genres} />
        <form onSubmit={this.handleSubmit} className={styles.form__search}>
          <input
            className={styles.search__input}
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
            value={search}
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  genres: getGenres(state),
  searchMovie: getSearchMovie(state),
  movies: getMovies(state),
});
const mapDispatchToProps = {
  fetchSuccessGenres,
  fetchSuccessSearchMovie,
  fetchSuccessMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
