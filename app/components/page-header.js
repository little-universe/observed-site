import React, { Fragment, PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

class PageHeader extends PureComponent<Props, State> {
  render() {
    const {headerText} = this.props;
    return (
      <div className="page-section section-header-container">
        <Grid container className='page-header'>
          <Grid item md={12} className="header-text">{headerText}</Grid>
        </Grid>
      </div>
    );
  }
}

export { PageHeader };
