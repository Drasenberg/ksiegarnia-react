import React from 'react';
import Aux from '../../hoc/Auxialiray/Auxiliray';
import BookCard from '../Card/BookCard';

const book = (props) => {

    let Book = Object.keys(props.Books)
    .map(igKey => {
        return [...Array(props.Books[igKey])].map((_, i) => {
            return <BookCard    key={igKey} 
                                title={props.Books[igKey].title} 
                                author={props.Books[igKey].author} 
                                desc={props.Books[igKey].description} 
                                imgPath={props.Books[igKey].imgPath}
                                id={igKey}
                                Books={props.Books}
                                onDeleteHandler={props.onDeleteHandler}
                                onEditBookHandler={props.onEditBookHandler}
                                onCanEdit={props.onCanEdit}
                                onCloseEdit={props.onCloseEdit}
                                show={props.show}
                                 />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);


    return (
        <Aux>
            {Book}
        </Aux>
    );
}

export default book;