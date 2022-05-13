import React, { useState, useEffect } from "react";
import CurrentItemDetail from "./CurrentItemDetail";
import { Alert } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import axios from "../config"
import { Link, useNavigate } from "react-router-dom";
const HomePage = (props) => {
    const navigate = useNavigate();
    const [currentItemList, setCurrentItemList] = useState([]);
    const [alertShow, setAlertShow] = useState(false);
    const [alertItemName, setAlertItemName] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get('items/currentitems')
            .then(function (response) {
                setCurrentItemList(response.data.items);
            })
            .catch(function (error) {
                if (error.response.status === 401) {
                    navigate("/login", { replace: true });
                }
                else {
                    console.log(error);

                }
            })
    }
    const showAlert = (itemName) => {
        setAlertShow(true)
        setAlertItemName(itemName)
    }
    return <section className="mt-3 wrapper px-2">
        {alertShow && <Alert variant="danger" onClose={() => setAlertShow(false)} dismissible>
            <Alert.Heading>Opps! Quantity of <b>{alertItemName}</b> didnt get updated </Alert.Heading>
        </Alert>}
        <h2 className=" mb-3">Current grocery at home</h2>
        {currentItemList.length < 1 ? <div>
            <p>No Items added. Please add some.</p>
            <Link to='/additem'><Button className="btn btn-primary">Add a New Purchase</Button></Link>
        </div>
            :
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
        }



    </section >

}

export default HomePage