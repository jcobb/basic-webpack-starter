import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
// import SandBox from './SandBox/SandBox';
import { PAGES } from '../../constants/constants';

const LazySandbox = Loadable({
    loader: () => import(/* webpackChunkName: "sandbox" */ './Sandbox/Sandbox'),
    loading: () => <div>loading</div>,
});

const LazySample = Loadable({
    loader: () => import(/* webpackChunkName: "sample" */ './Sample/Sample'),
    loading: () => <div>loading</div>,
});

const PAGE_HANDLERS = {
    [PAGES.SANDBOX]: LazySandbox,
    sample: LazySample,
};

const Page = (props) => {
    const Handler = PAGE_HANDLERS[props.page];
    return <Handler />;
};

Page.propTypes = {
    page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};

export default Page;
