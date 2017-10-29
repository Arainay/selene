import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gatewayActions from '../actions/gatewayActions';

class GatewayPage extends PureComponent {
  render() {
    return <h1>Gateway</h1>;
  }
}

const mapStateToProps = state => {
  return { gateway: state.gateway };
};

const mapDispatchToProps = dispatch => {
  return { gatewayActions: bindActionCreators(gatewayActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GatewayPage);