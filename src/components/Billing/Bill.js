import React from 'react';
import billData from './BillData'; // or pass as prop
import './Bill.css'; // optional styling

export default function Bill() {
  const total = billData.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bill-container">
      <h2>Order Summary</h2>
      <table className="bill-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price (Rs)</th>
            <th>Qty</th>
            <th>Subtotal (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {billData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bill-total">
        <strong>Total: Rs {total}</strong>
      </div>
    </div>
  );
}
