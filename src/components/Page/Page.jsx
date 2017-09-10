import React from 'react';
import PropTypes from 'prop-types';
import SandBox from './SandBox/SandBox';
import {
    PAGES,
} from '../../constants/constants';

const PAGE_HANDLERS = {
    [PAGES.SANDBOX]: SandBox,
};

const Page = (props) => {
    const Handler = PAGE_HANDLERS[props.page];
    return <Handler />;
};

Page.propTypes = {
    page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};

export default Page;
