import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from './EditBook.module.css';
import Form from 'react-bootstrap/Form'
//import axios from '../../axios';

class editBook extends Component {
    state = {
        editedBook: {
            author: this.props.author,
            title: this.props.title,
            description: this.props.desc,
            imgPath: this.props.imgPath
        }
        
    }
    onChangeHandlerAuthor = (e) => {
        this.setState(prevState => ({
            editedBook: {
                ...prevState.editedBook,
                author: e.target.value
            }
        }))
    }
    onChangeHandlerTitle = (e) => {
        this.setState(prevState => ({
            editedBook: {
                ...prevState.editedBook,
                title: e.target.value
            }
        }))
    }
    onChangeHandlerDesc = (e) => {
        this.setState(prevState => ({
            editedBook: {
                ...prevState.editedBook,
                description: e.target.value
            }
        }))
    }
    onChangeHandlerImgPath = (e) => {
        this.setState(prevState => ({
            editedBook: {
                ...prevState.editedBook,
                imgPath: e.target.value
            }
        }))
    }
    render () {
        return (
                <Modal.Dialog className={classes.EditBook}>
        
                <Modal.Body>
                    Autor: <Form.Control value={this.state.editedBook.author} onChange={this.onChangeHandlerAuthor}/>
                    Tytuł: <Form.Control value={this.state.editedBook.title} onChange={this.onChangeHandlerTitle} />
                    Opis: <Form.Control as='textarea' rows={6} value={this.state.editedBook.description} onChange={this.onChangeHandlerDesc} />
                    Zdjęcie: <Form.Control type='url' value={this.state.editedBook.imgPath} onChange={this.onChangeHandlerImgPath} />
                    
                    
                </Modal.Body>
        
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.close}>Close</Button>
                    <Button variant="primary" onClick={() => {this.props.onEditBookHandler(this.props.id, this.state.editedBook)}}>Save changes</Button>
                </Modal.Footer>
                </Modal.Dialog>
        );
    }
} 

export default editBook;