// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HeaderComponent } from '../components/header';
import { setMenuOpened, setMenuClosed } from '../actions/header';
import type { AppState } from '../types/app-state';
import type { Dispatch } from '../types/redux';

const mapStateToProps = (state: AppState) => ({
  header: state.header,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMenuOpened: () => dispatch(setMenuOpened()),
  setMenuClosed: () => dispatch(setMenuClosed()),
});

export const HeaderContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent));
