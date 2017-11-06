import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gatewayActions from '../actions/gatewayActions';

class GatewayPage extends PureComponent {
  editForm() {
    if (this.btns.classList.contains('hide')) {
      this.btns.classList.remove('hide');
    }
  }

  submitForm(e) {
    e.preventDefault();
    let formData = {
      name: e.target['gateway-name'].value,
      uid: e.target['gateway-uid'].value,
      iotConnectUrl: e.target['gateway-iot-connect-url'].value,
      topology: e.target['gateway-topology'].value,
      heartBeatInterval: e.target['gateway-hb-interval'].value,
      rawApiKey: e.target['gateway-api-key'].value,
      rawSecretApiKey: e.target['gateway-secret-api-key'].value,
      cloudPlatform: e.target['gateway-cloud-platform'].value,
      enabled: e.target['gateway-enabled'].checked
    };
    this.props.gatewayActions.updateGateway(formData);
  }

  render() {
    this.props.gatewayActions.getGateway();
    return (
      <div className="page-content__inner">
        <header className="page-content__header container">
          <h1 className="page-content__page-title">Gateway</h1>
        </header>
        <div className="page-content__body container">
          <div className="page-content__main-content">
            <form action="" className="form" onSubmit={::this.submitForm}>
              <div className="form__header">
                <h2 className="form__title">{this.props.gateway.name}</h2>
                <button type="button" className="form__button" onClick={::this.editForm}>Edit</button>
              </div>
              <div className="form__line">
                <label htmlFor="name" className="form__label">Name*</label>
                <input
                  type="text"
                  id="name"
                  className="form__input"
                  name="gateway-name"
                  defaultValue={this.props.gateway.name}
                  required />
              </div>
              <div className="form__line">
                <label htmlFor="uid" className="form__label">UID*</label>
                <input
                  type="text"
                  id="uid"
                  className="form__input"
                  name="gateway-uid"
                  defaultValue={this.props.gateway.uid}
                  required />
              </div>
              <div className="form__line">
                <label htmlFor="iot-connect-url" className="form__label">IoT Connect Url*</label>
                <textarea
                  name="gateway-iot-connect-url"
                  id="iot-connect-url"
                  className="form__textarea"
                  rows="1"
                  defaultValue={this.props.gateway.iotConnectUrl}
                  required>
                </textarea>
              </div>
              <div className="form__line">
                <label htmlFor="topology" className="form__label">Topology</label>
                <input
                  type="text"
                  id="topology"
                  className="form__input"
                  name="gateway-topology"
                  defaultValue={this.props.gateway.topology} />
              </div>
              <div className="form__line">
                <label htmlFor="heart-beat-interval" className="form__label">Heart Beat Interval*</label>
                <input
                  type="text"
                  id="heart-beat-interval"
                  className="form__input"
                  name="gateway-hb-interval"
                  defaultValue={this.props.gateway.heartBeatInterval}
                  required />
              </div>
              <div className="form__line">
                <label htmlFor="api-key" className="form__label">Raw API Key*</label>
                <textarea
                  name="gateway-api-key"
                  id="api-key"
                  className="form__textarea"
                  rows="3"
                  defaultValue={this.props.gateway.rawApiKey}
                  required>
                </textarea>
              </div>
              <div className="form__line">
                <label htmlFor="secret-api-key" className="form__label">Raw Secret API Key*</label>
                <textarea
                  name="gateway-secret-api-key"
                  id="secret-api-key"
                  className="form__textarea"
                  rows="3"
                  defaultValue={this.props.gateway.rawSecretApiKey}
                  required>
                </textarea>
              </div>
              <div className="form__line">
                <label htmlFor="platform" className="form__label">Cloud Platform*</label>
                <input
                  type="text"
                  id="platform"
                  className="form__input"
                  name="gateway-cloud-platform"
                  defaultValue={this.props.gateway.cloudPlatform}
                  required />
              </div>
              <div className="form__line">
                <label htmlFor="enabled" className="form__label">Enabled</label>
                <div className="form__checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="enabled"
                    name="gateway-enabled"
                    defaultChecked={this.props.gateway.enabled} />
                </div>
              </div>
              <div className="form__line empty-before">
                <div className="form__btns hide" ref={btns => this.btns = btns}>
                  <button type="submit" className="form__button">Save</button>
                  <button type="reset" className="form__button">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { gateway: state.gateway };
};

const mapDispatchToProps = dispatch => {
  return { gatewayActions: bindActionCreators(gatewayActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GatewayPage);