import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { fetchSuccessMovies } from '../../../modules/operations';
import styles from './Pagination.module.css';

class Pagination extends Component {
  state = {};

  render() {
    const { id } = this.props;
    return (
      <div>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel="..."
          breakClassName={styles.breakMe}
          pageCount={99}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={e =>
            this.props.fetchSuccessMovies(id && id, e.selected)
          }
          containerClassName={styles.container}
          subContainerClassName={styles.pages}
          activeClassName={styles.active}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { fetchSuccessMovies };

export default connect(
  null,
  mapDispatchToProps,
)(Pagination);
