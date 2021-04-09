import React, { useEffect, useState } from 'react';
import './Checkout.css'
import { useParams } from 'react-router'

const Checkout = () => {
    const { _id } = useParams()
    var quantity = 1

    const [booklist, setBooklist] = useState({})

    const { name, price } = booklist

    useEffect(() => {
        fetch('https://pacific-caverns-37791.herokuapp.com/checkout/' + _id)
            .then(res => res.json())
            .then(data => setBooklist(data))
    }, [])



    return (
        <div className="checkout">
            <h2>Check out page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price} Taka</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total Price:</td>
                        <td></td>
                        <td>{price} Taka</td>
                    </tr>
                </tfoot>
            </table>
            <button>Place Order</button>

        </div>
    );
};

export default Checkout;