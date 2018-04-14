import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Header from '../Header/Header';
import Page from '../Page/Page';
import ModalContainer from '../Modal/ModalContainer';

import {
    PAGES,
} from '../../constants/constants';

import {
    log,
} from '../../utils';

import './App.scss';

class App extends Component {
    componentDidMount() {
        // at commit 49dbfc8 (5/4/2017): ~200ms
        log.info(`App interactive (ms) ${Math.round(performance.now())}`);

        this.props.setAppIdle();
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Header openModal={this.props.openModal} />
                    <Page page={PAGES.SANDBOX} />
                    <ModalContainer />
                </div>
            </Provider>
        );
    }
}

App.propTypes = {
    // methods
    setAppIdle: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,

    // props
    store: PropTypes.any.isRequired,
    appState: PropTypes.shape({
        appIdle: PropTypes.boolean,
    }).isRequired,
};

export default App;
