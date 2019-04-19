import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenres, getMovies } from '../../../../modules/selectors';
import {
  fetchSuccessGenres,
  fetchSuccessSearchMovie,
  fetchSuccessMovies,
} from '../../../../modules/operations';

import Header from '../Header/Header';

class HeaderContainer extends Component {
  state = {
    search: '',
    menuOpen: false,
  };

  componentDidMount() {
    this.props.fetchSuccessGenres();
    this.props.fetchSuccessSearchMovie(this.state.search);
  }

  handleMenuClick = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  handleLinkClick = () => this.setState({ menuOpen: false });

  handleChange = e => this.setState({ search: e.target.value });

  handleSubmit = e => {
    const { search } = this.state;
    e.preventDefault();
    this.props.fetchSuccessSearchMovie(search);
    this.setState({ search: '' });
    this.handleMenuClick();
  };

  getId = id => this.props.fetchSuccessMovies(`&with_genres=${id}`);

  render() {
    const { search, menuOpen } = this.state;
    const { genres, searchMovie, movies } = this.props;
    return (
      <Header
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        search={search}
        searchMovie={searchMovie}
        movies={movies}
        getId={this.getId}
        genres={genres}
        handleMenuClick={this.handleMenuClick}
        handleLinkClick={this.handleLinkClick}
        menuOpen={menuOpen}
      />
    );
  }
}

const mapStateToProps = state => ({
  genres: getGenres(state),
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
)(HeaderContainer);
