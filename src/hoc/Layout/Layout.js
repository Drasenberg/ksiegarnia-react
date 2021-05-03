import classes from './Layout.module.css';
import React, { Component } from 'react';
import Aux from '../Auxialiray/Auxiliray';

class Layout extends Component {


    render () {
        return (
            <Aux>
                <main className={classes.Container}> 
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}

export default Layout;