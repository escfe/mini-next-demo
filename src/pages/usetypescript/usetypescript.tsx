'use strict';
import React, { Component } from 'react';
import './index.scss';

export default class App extends Component {
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <div className="demo">
                hello mini-next, Use typescript!
            </div>
        );
    }
}
