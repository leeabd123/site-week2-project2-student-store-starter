import React from 'react';
import "./Reciept.css";

export default function Reciept(props) {
  const { thePurchases, products } = props;
  console.log(thePurchases);

  return (
    <div className="receipt">
      <h3 class="title">Receipt</h3>
      <p>
        Showing receipt for <strong>{thePurchases[0].name.name}</strong> available at <strong>{thePurchases[0].email.email}:</strong>
      </p>
      {thePurchases[0].order.shoppingCart.map((item) => {
        const product = products.find((product) => product.id === item.itemId);
        return (
          <p key={item.itemId}>
            <strong>{item.quantity}</strong> total products with the id of <strong>{item.itemId} ({product.name})</strong> purchased at a cost of <strong>{item.quantity * product.price} </strong>
            <p><strong>Subtotal: </strong>{thePurchases[0].subtotal.total_num}</p>
            <p><strong>Tax and Fees:</strong> {thePurchases[0].tax.subtotal_tax}</p>
            <p><strong>Total:</strong> {thePurchases[0].total.total}</p>
            <p><strong>Date and Time:</strong> {thePurchases[0].createdAt}</p>



          </p>
        );
      })}
    </div>
  );
}
