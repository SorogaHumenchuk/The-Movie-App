import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getTotalMovies } from '../../../modules/selectors';
import { fetchSuccessMovies } from '../../../modules/operations';
import styles from './Pagination.module.css';

class Pagination extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { movies, fetchSuccessMovies } = this.props;
    return (
      <div>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={`...`}
          breakClassName={styles.breakMe}
          pageCount={99}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={e => fetchSuccessMovies(e.selected)}
          containerClassName={styles.container}
          subContainerClassName={styles.pages}
          activeClassName={styles.active}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: getTotalMovies(state),
});
const mapDispatchToProps = { fetchSuccessMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
