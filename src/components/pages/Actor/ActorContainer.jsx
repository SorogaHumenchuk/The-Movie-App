import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getActorInfo } from '../../../modules/selectors';
import { fetchActorInfoById } from '../../../modules/operations';

import ActorView from './ActorView';

class ActorContainer extends Component {
  componentDidMount() {
    this.props.fetchActorInfoById(this.props.match.params.credit_id);
  }

  render() {
    const { actor } = this.props;
    return <ActorView actor={actor} />;
  }
}

const mapStateToProps = state => ({
  actor: getActorInfo(state),
});

const mapDispatchToProps = { fetchActorInfoById };

export default connect(
  mapStateToProps,

  mapDispatchToProps,
)(ActorContainer);
