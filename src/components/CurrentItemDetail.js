import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import axios from "../config"
function CurrentItemDetail(props) {
    const navigate = useNavigate();
    const currentItem = props.currentItems
    const [quantity, setQuantity] = useState(currentItem.quantity);
    const [show, setShow] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const checkQunatity = (e) => {
        e.preventDefault();
        setAlertShow(false)
        if (e.target.value > currentItem.quantity) {
            setAlertShow(true);
        }
        else {
            setQuantity(e.target.value)
        }

    }
    const updateQuantity = () => {
        setShow(false)

        const updateData = { id: currentItem.id, quantity: Number.parseFloat(currentItem.quantity - quantity).toFixed(2) }
        axios.post('/items/updatecurrentitem', updateData)
            .then(function (response) {
                navigate("/", { replace: true });
                return (response);
            })
            .catch(function (error) {
                return (error);
            });


    }
    return <tr>
        <th scope="row">{currentItem.itemDetails.item_name}</th>
        <td className={currentItem.quantity < 3 && "text-danger"}>{currentItem.quantity} {currentItem.Unit}</td>
        <td>
            {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Update Quantity</button> */}
            <Button variant="primary" onClick={handleShow} className="button-color">
                Quantity Used
            </Button>

            <Modal show={show} onHide={handleClose} onExiting={props.fetchData}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentItem.itemDetails.item_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {alertShow && <p className="text-danger">Please enter quantity less its already there.</p>}
                    <div className=" d-flex align-middle">
                        <label for="quantity" className="me-3 " >Quantity Used<span className="font-weight-bold">(lbs)</span> </label>
                        <input type="number" name="quantity" className="form-control" value={quantity} onChange={(e) => { checkQunatity(e) }} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateQuantity}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{currentItem.itemDetails.item_name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div className="d-flex">
                                <div className="text-start">
                                    <label for="quantity" className="form-label" >Quantity</label>
                                    <input type="number" name="quantity" className="form-control" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                                </div>
                                <div className="ml-2 text-start">
                                    <label for="" className="form-label">Unit</label>
                                    <select className="form-select" aria-label="Default select example" name="">
                                        <option value="lbs">lbs</option>
                                        <option value="grams">grams</option>
                                        <option value="quantity">Quantity</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={updateQuantity}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </td>

    </tr >
}
export default CurrentItemDetail;