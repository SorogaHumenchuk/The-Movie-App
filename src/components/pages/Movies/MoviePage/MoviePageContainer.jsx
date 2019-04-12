import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSuccessMovieById,
  fetchRecommendationsById,
} from '../../../../modules/operations';
import {
  getMovieByID,
  getRecommendations,
} from '../../../../modules/selectors';

import MoviePageView from './MoviePageView';

class MoviePage extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchSuccessMovieById(this.props.match.params.id);
    this.props.fetchRecommendationsById(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchSuccessMovieById(this.props.match.params.id);
      this.props.fetchRecommendationsById(this.props.match.params.id);
    }
  }

  render() {
    const { movieById, recommendations } = this.props;
    return (
      <div>
        <MoviePageView
          movieById={movieById}
          recommendations={recommendations}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieById: getMovieByID(state),
  recommendations: getRecommendations(state),
});
const mapDispatchToProps = { fetchSuccessMovieById, fetchRecommendationsById };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviePage);
