import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class newBook extends Component {
  
    render(){
    return (
        <Modal.Dialog>

        <Modal.Body>
            Autor: <Form.Control value={this.props.author} onChange={this.props.onChangeHandlerAuthor}/>
            Tytuł: <Form.Control value={this.props.title} onChange={this.props.onChangeHandlerTitle} />
            Opis: <Form.Control  as="textarea" value={this.props.desc} onChange={this.props.onChangeHandlerDesc}/>
            Zdjęcie: <Form.Control type='url' value={this.props.imgPath} onChange={this.props.onChangeHandlerImgPath} />
            
            
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={this.props.modalClosed}>Close</Button>
            <Button variant="primary" onClick={this.props.onSaveChange}>Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
    );
}}

export default newBook;