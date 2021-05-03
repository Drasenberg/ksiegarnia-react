import React, { Component } from 'react';
import Aux from '../../hoc/Auxialiray/Auxiliray';
import Book from '../../Components/Book/Book';
import CardDeck from 'react-bootstrap/CardDeck'
import classes from './ListsBooks.module.css';
import axios from '../../axios';
import Menu from '../../Components/Menu/Menu';

class ListsBooks extends Component {

    state = {
        Books: [],
        show: true,
        addNewBook: false,
        newBook: {
            author: '',
            title: '',
            description: '',
            imgPath: ''
        },
        canEdit: false

    }

    componentDidMount () {
        axios.get('/books.json')
        .then(response => {
            this.setState({Books: response.data})
            });
    }
    
    onCloseModalHandler = () => {
        this.setState({addNewBook: false});
    }
    onSaveChange = () => {
        this.componentDidMount();
        let newBook = this.state.newBook;
        axios.post('/books.json', newBook).then(() => {
            this.componentDidMount();
        });
        this.setState({addNewBook: false});
        this.setState(prevState => ({
            newBook: {
                ...prevState.newBook,
                author: ' ',
                title: ' ',
                description: ' ',
                imgPath: ' '
            }
        }));        
    }
    newBookHandler = () => {
        this.setState({addNewBook: true});
    }
    onChangeHandlerAuthor = (e) => {
        this.setState(prevState => ({
            newBook: {
                ...prevState.newBook,
                author: e.target.value
            }
        }))
    }
    onChangeHandlerTitle = (e) => {
        this.setState(prevState => ({
            newBook: {
                ...prevState.newBook,
                title: e.target.value
            }
        }))
    }
    onChangeHandlerDesc = (e) => {
        this.setState(prevState => ({
            newBook: {
                ...prevState.newBook,
                description: e.target.value
            }
        }))
    }
    onChangeHandlerImgPath = (e) => {
        this.setState(prevState => ({
            newBook: {
                ...prevState.newBook,
                imgPath: e.target.value
            }
        }))
    }

    onDeleteHandler = (id) => {
        axios.delete('/books/' + id + '.json').then(() => {
            this.componentDidMount();
        });
    }
    onEditBookHandler = (id, editedBook) => {
        let urlEditedBook = '/books/' + id + '.json';
        axios.put(urlEditedBook, editedBook).then(() => {
            this.componentDidMount();
        });
        this.setState({canEdit: false});
    }
    onCanEditHandler = () => {
        this.setState({canEdit: true});
    }
    onCloseEditHandler = () => {
        this.setState({canEdit: false});
    }
    render () {

        let book = <p>Loading...</p>
        if(this.state.Books){
           book = <Book 
                    show={this.state.canEdit} 
                    Books={this.state.Books} 
                    onDeleteHandler={this.onDeleteHandler} 
                    onEditBookHandler={this.onEditBookHandler} 
                    closed={this.onCloseModalHandler} 
                    newBookHandler={this.newBookHandler}
                    onCanEdit={this.onCanEditHandler}
                    onCloseEdit={this.onCloseEditHandler} />
        }
        return (
        <Aux>
            <Menu 
             author={this.state.newBook.author}
             title={this.state.newBook.title}
             desc={this.state.newBook.desc}
             imgPath={this.state.newBook.imgPath}
             onChangeHandlerAuthor={this.onChangeHandlerAuthor}
             onChangeHandlerTitle={this.onChangeHandlerTitle}
             onChangeHandlerDesc={this.onChangeHandlerDesc}
             onChangeHandlerImgPath={this.onChangeHandlerImgPath}
             closed={this.onCloseModalHandler} 
             newBookHandler={this.newBookHandler} 
             onSaveChange={this.onSaveChange}
             show = {this.state.addNewBook}/>
            <div className={classes.MainBooks}>
            <CardDeck>
                {book}
            </CardDeck>
            </div>
        </Aux>
    );}
}

export default ListsBooks;