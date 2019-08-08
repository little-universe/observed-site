import React, { Fragment, PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

class PageImage extends PureComponent<Props, State> {
  render() {
    const {imageLink, imageCaptionHeader, imageCaptionText, imageLeft, imageRight, imageCenter} = this.props;
    return (
      <div className="page-section section-image-container">
        {imageCenter &&
            <Grid container className='page-image image-center'>
              <Grid item md={12} className='image-wrapper'>
                <img src={imageLink} className='image-source'></img>
              </Grid>
            </Grid>
        }
        {imageLeft &&
            <Grid container className='page-image image-left'>
              <Grid item md={7} className='image-wrapper'>
                <img src={imageLink} className='image-source'></img>
              </Grid>
            </Grid>
        }
        {imageRight &&
            <Grid container className='page-image image-right'>
              <Grid item md={5}></Grid>
              <Grid item md={7} className='image-wrapper'>
                <img src={imageLink} className='image-source'></img>
              </Grid>
            </Grid>
        }
        <Grid container className='image-caption'>
          <Grid item md={1}></Grid>
          <Grid item md={5} className='caption-header'>{imageCaptionHeader}</Grid>
          <Grid item md={6} className='caption-text'>{imageCaptionText}</Grid>
        </Grid>
      </div>
    );
  }
}

export { PageImage };
