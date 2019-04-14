import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchSuccessMovieById,
  fetchRecommendationsById,
} from '../../../../modules/operations';
import {
  getMovieByID,
  getRecommendations,
  getTrailersById,
} from '../../../../modules/selectors';

import MoviePageView from './MoviePageView';
import styles from './MoviePage.module.css';

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
    const { movieById, recommendations, trailers } = this.props;
    return (
      <div className={styles.container}>
        <MoviePageView
          movieById={movieById}
          recommendations={recommendations}
          trailers={trailers}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieById: getMovieByID(state),
  recommendations: getRecommendations(state),
  trailers: getTrailersById(state),
});
const mapDispatchToProps = { fetchSuccessMovieById, fetchRecommendationsById };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviePage);
