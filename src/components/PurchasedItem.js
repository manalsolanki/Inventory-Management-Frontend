import React from "react";
import format from "date-fns/format";
function PurchasedItem(props) {
    const details = props.allPurchases
    return <tr >
        <th scope="row">{details.itemDetail.item_name}</th>
        <td>{details.quantity} {details.units}</td>
        <td>{details.price}</td>
        <td>{format(new Date(details.date_of_purchase), 'dd MMM, yyyy')}</td>
    </tr>



}

export default PurchasedItem;