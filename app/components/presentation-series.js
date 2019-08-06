
import React, { Fragment, PureComponent } from 'react';
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
    const isNotImageSection =
      type === SECTION_HEADER_TYPE ||
      type === SECTION_TEXT_TYPE;
    const sectionWrapperClassnames = cx({
      'presentation-series__section-wrapper': true,
      'presentation-series__section-wrapper--image': !isNotImageSection,
    });

    return(
      <Fragment>
        <div>hi</div>
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
