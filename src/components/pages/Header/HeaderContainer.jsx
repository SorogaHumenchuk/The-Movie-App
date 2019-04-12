import React, { Component } from 'react';
import { connect } from 'react-redux';

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

import HeaderView from './HeaderView';

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
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
            value={search}
          />
        </form>
        <HeaderView genres={genres} />
      </header>
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
