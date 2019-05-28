// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ProjectSlider } from '../components/project-slider';
import { setLightboxOpened } from '../actions/lightbox';
import type { Dispatch } from '../types/redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLightboxOpened: (slides, currentSlide) =>
    dispatch(setLightboxOpened(slides, currentSlide)),
});

export const ProjectSliderContainer = withRouter(connect(
  null,
  mapDispatchToProps,
)(ProjectSlider));
