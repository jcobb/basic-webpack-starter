import React, { Component } from 'react';
import Button from '../../Button/Button';
import Card from '../../Card/Card';

class Sample extends Component {
    render() {
        const sample =  "hey I am sample I am unique dude";

        return (
            <Card>
                {sample}
                <Button onClick={() => { console.log('hi'); }} />
            </Card>
        );
    }
}

export default Sample;
