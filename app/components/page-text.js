import React, { Fragment, PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

class PageText extends PureComponent<Props, State> {
  render() {
    const {textParagraph} = this.props;
    return (
      <div className="page-section section-text-container">
      <Grid container className="page-text">
      <Grid item md={4}></Grid>
      <Grid item md={8} className="text-area">{textParagraph}</Grid>
      </Grid>
      </div>
    );
  }
}

export { PageText };
