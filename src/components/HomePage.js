import React, { useState, useEffect } from "react";
import CurrentItemDetail from "./CurrentItemDetail";
import { Alert } from "react-bootstrap";
import axios from "axios";
const HomePage = (props) => {
    const [currentItemList, setCurrentItemList] = useState([]);
    const [alertShow, setAlertShow] = useState(false);
    const [alertItemName, setAlertItemName] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get('http://localhost:3010/items/currentitems')
            .then(function (response) {
                setCurrentItemList(response.data.items);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const showAlert = (itemName) => {
        setAlertShow(true)
        setAlertItemName(itemName)
    }
    return <section className="mt-3 wrapper ">
        {alertShow && <Alert variant="danger" onClose={() => setAlertShow(false)} dismissible>
            <Alert.Heading>Opps! Quantity of <b>{alertItemName}</b> didnt get updated </Alert.Heading>
        </Alert>}
        <h2 className="text-center mb-3">Current grocery at home</h2>
        <table className="table table-hover align-middle" >
            <thead>
                <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Change</th>
                </tr>
            </thead>
            <tbody>
                {currentItemList.map((item) => {
                    return <CurrentItemDetail currentItems={item} fetchData={fetchData} showAlert={showAlert} />
                })}
            </tbody>
        </table>

    </section>

}

export default HomePage