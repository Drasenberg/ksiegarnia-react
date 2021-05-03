import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './BookCard.module.css'
import Aux from '../../hoc/Auxialiray/Auxiliray';
import Modal from '../UI/Modal/Modal';
import EditBook from '../EditBook/EditBook';


class bookCard extends Component {
    state = {
        canEdit: false
    }
    
    onEditHandler = () => {
        this.setState({canEdit: true});
    }

    closeEdit = () => {
        this.setState({canEdit: false});
    }
        
    render() {
        let currBook = this.props.Books[this.props.id];
        return (
            <Aux>
            <Modal show={this.props.show} modalClosed={this.props.onCloseEdit}><EditBook close={this.props.onCloseEdit} 
                title={currBook.title} 
                desc={currBook.description} 
                author={currBook.author} 
                imgPath={currBook.imgPath} 
                id={this.props.id}
                onEditBookHandler={this.props.onEditBookHandler}
               /></Modal>
            <div className={classes.Book}>
            <Card style={{height: '550px'}}>
                    <Card.Img style={{height: '186px', width: '143px'}} as="img" variant="top" src={this.props.imgPath} alt="zdjęcie ksiązki" />
                    <Card.Body style={{overflow: 'auto'}}>
                        <Card.Title style={{fontSize: '25px'}}>{this.props.author}</Card.Title>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.desc}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary" onClick={this.props.onCanEdit}>Edit</Button>
                        <Button variant="danger" onClick={() => this.props.onDeleteHandler(this.props.id)}>Delete</Button>
                    </Card.Footer>
                </Card>
            </div>
            </Aux>
        );
    }
} 

export default bookCard;