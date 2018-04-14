import React, { Component } from 'react';
import Button from '../../Button/Button';
import Card from '../../Card/Card';

import './SandBox.scss';

class SandBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            val: '',
        };
    }

    render() {
        return (
            <Card>
                <Button onClick={() => { console.log('hi'); }} />
            </Card>
        );
    }
}

export default SandBox;
