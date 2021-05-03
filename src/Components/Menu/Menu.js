import classes from './Menu.module.css';
import React from 'react';
import Nav from 'react-bootstrap/Nav'

import Aux from '../../hoc/Auxialiray/Auxiliray';
import Modal from '../UI/Modal/Modal';
import NewBook from '../NewBook/NewBook';
import Button from 'react-bootstrap/Button'

const menu = (props) => {
    return (
        <Aux>
            <Modal show={props.show} modalClosed={props.closed} ><NewBook 
                author={props.author}
                title={props.title}
                desc={props.desc}
                imgPath={props.imgPath}
                onChangeHandlerAuthor={props.onChangeHandlerAuthor}
                onChangeHandlerTitle={props.onChangeHandlerTitle}
                onChangeHandlerDesc={props.onChangeHandlerDesc}
                onChangeHandlerImgPath={props.onChangeHandlerImgPath}
                modalClosed={props.closed} 
                onSaveChange={props.onSaveChange}/></Modal>
            <Nav className={classes.MainNav}>
                <Button variant="link" > Lista Książek</Button>
                <Button variant="link" onClick={props.newBookHandler}> Dodaj Książkę </Button>
            </Nav>
        </Aux>
    );
}

export default menu;