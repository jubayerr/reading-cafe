import React, { useEffect, useState } from 'react';
import './Home.css'
import Books from '../Books/Books';

const Home = () => {

    const [booklist, setBooklist] = useState([])

    useEffect(() => {
        fetch('https://pacific-caverns-37791.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBooklist(data))
    }, [])

    return (
        <div className="home">
            {
                booklist.map(book => <Books key={book.id} book={book}></Books>)
            }
        </div>
    );
};

export default Home;