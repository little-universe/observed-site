
import React, { Fragment, PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import debounce from 'lodash.debounce';
import cx from 'classnames';
import { SECTION_IMAGE_TYPE, SECTION_HEADER_TYPE, SECTION_TEXT_TYPE } from '../constants/presentation/types';
import { PROJECT_ROUTES } from '../constants/routes';
import { history } from '../store/configure';

type Props = {
  //Data
  presentationIndex: number,
  sections: Array<Object>,
};


class PresentationSeries extends PureComponent<Props, State> {

  componentDidMount() {
  }
  componentWillUnmount() {
  }

  renderSection = () => {
    const { sections } = this.props;
    const {
      type,
      image,
      captionHeader,
      captionSubtext,
      headerText,
      textBody,
    } = sections;
    const isImageSection = type === SECTION_IMAGE_TYPE;
    const isHeaderSection = type === SECTION_HEADER_TYPE;
    const isTextSection = type === SECTION_TEXT_TYPE;


    return(
      <Fragment>
        <div className='presentation-series__page-wrapper'>
          {sections.map((section) =>
              <div
                key={section.id}
                className='presentation-series__section-content'
              >
              {isImageSection ? null : (
                <div className="presentation-series__section-image">
                  <Grid container className='image-container'>
                    <Grid item md={12}><img src={section.image}/></Grid>
                  </Grid>
                  <Grid container className='caption-container'>
                    <Grid item md={1}></Grid>
                    <Grid item md={5} className='caption-header'>{section.captionHeader}</Grid>
                    <Grid item md={6} className='caption-subtext'>{section.captionSubtext}</Grid>
                  </Grid>
                </div>
              )}
              {isHeaderSection ? null : (
                <div className="presentation-series__section-header">
                  <Grid container className='presentation-series__header-container'>
                    <Grid item md={1}></Grid>
                    <Grid item md={5}>{section.headerText}</Grid>
                  </Grid>
                </div>
              )}
              {isTextSection ? null : (
                <div className="presentation-series__section-text">
                  <Grid container className='presentation-series__text-container'>
                    <Grid item md={6}></Grid>
                    <Grid item md={6}>{section.textBody}</Grid>
                  </Grid>
                </div>
              )}
              </div>
          )}
        </div>
      </Fragment>
    )
  };

  render() {
    return (
      <div className='presentation-series'>
        {this.renderSection()}
      </div>
    );
  }
}

export { PresentationSeries };
