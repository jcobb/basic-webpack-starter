import React, { PropTypes } from 'react';
import SandBox from './SandBox/SandBox';
import {
  PAGES,
} from '../../constants/constants';

const PAGE_HANDLERS = {
  [PAGES.SANDBOX]: SandBox,
};

const Page = (props) => {
  const Handler = PAGE_HANDLERS[props.page];

  return <Handler {...props} />;
};

Page.propTypes = {
  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};

export default Page;
