import React from 'react';
import { useHistory } from 'react-router';
import './Books.css'
const Books = (props) => {
    const { _id, image, name, price } = props.book
    // console.log('books', props.book);
    const history = useHistory()
    const handleBook = (_id) => {
        history.push(`/checkout/${_id}`)
    }
    return (
        <div className="books">
            <img src={image} alt="" />
            <h4>{name}</h4>

            <div className="books-footer">
                <h2><span className="currency">TK. </span>{price}</h2>
                <span><button onClick={() => handleBook(_id)} >Buy Now</button></span>
            </div>

        </div>
    );
};

export default Books;