// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LightboxComponent } from '../components/lightbox';
import { setLightboxClosed } from '../actions/lightbox';
import type { AppState } from '../types/app-state';
import type { Dispatch } from '../types/redux';

const mapStateToProps = (state: AppState) => ({
  lightbox: state.lightbox,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLightboxClosed: () => dispatch(setLightboxClosed()),
});

export const LightboxContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LightboxComponent));
