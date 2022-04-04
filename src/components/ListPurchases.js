import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";
import PurchasedItem from "./PurchasedItem";
const ListPurchases = (props) => {
    const [purchasedList, setPurchasedList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3010/items/purchaseditem')
            .then(function (response) {
                setPurchasedList(response.data.items);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    return <section className="mt-3 wrapper ">
        <div className="d-flex justify-content-between mb-3">
            <h2>All Purchases</h2>
            <Link to='/additem'><Button className="btn btn-primary">Add a New Purchase</Button></Link>
        </div>

        <table className="table table-hover" >
            <thead>
                <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {purchasedList.map((purchasedItem) => {
                    return <PurchasedItem allPurchases={purchasedItem} key={purchasedItem.id} />
                })}
            </tbody>
        </table>
    </section>

}

export default ListPurchases; 