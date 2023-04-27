import React, {  useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch('https://localhost:7159/api/items')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data);
      })
  }

  const clearItems = () =>{
    setItems([]);
  }

  return (
    <div className="App">
      <button onClick={fetchItems}>Get Items</button>
      <button onClick={clearItems}>Clear Items</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">BarcodesAmount </th>
            <th scope="col">CategoryId </th>
            <th scope="col">CheckedOutById </th>
            <th scope="col">CheckinNotes </th>
            <th scope="col">CheckoutReasonId </th>
            <th scope="col">CurrentOrgId </th>
            <th scope="col">CurrentOrgName </th>
            <th scope="col">Description </th>
            <th scope="col">DispositionAuthorizationStatusId </th>
            <th scope="col">DispositionAuthorizationStatus </th>
            <th scope="col">CurrentOfficeId </th>
            <th scope="col">CurrentOfficeName </th>
            <th scope="col">CustodianId </th>
            <th scope="col">Custodian </th>
            <th scope="col">Barcode </th>
            <th scope="col">CustodyReasonId </th>
            <th scope="col">CustodyReason </th>
            <th scope="col">StatusId </th>
            <th scope="col">Status </th>
            <th scope="col">RecoveryDate </th>

          </tr>
        </thead>
        <tbody>
          {items.length > 0 && (
            items.map(product => (
            <tr key={product.id}>
              <td>
                <button>View</button>
              </td>
              <td className="align-middle">{ product.categoryId }</td>
              <td className="align-middle">{ product.checkedOutById }</td>
              <td className="align-middle">{ product.checkinNotes }</td>
              <td className="align-middle">{ product.checkoutReasonId }</td>
              <td className="align-middle">{ product.currentOrgId }</td>
              <td className="align-middle">{ product.currentOrgName }</td>
              <td className="align-middle">{ product.barcodesAmount }</td>
              <td className="align-middle">{ product.description }</td>
              <td className="align-middle">{ product.dispositionAuthorizationStatusId }</td>
              <td className="align-middle">{ product.dispositionAuthorizationStatus }</td>
              <td className="align-middle">{ product.currentOfficeId }</td>
              <td className="align-middle">{ product.currentOfficeName }</td>
              <td className="align-middle">{ product.custodianId }</td>
              <td className="align-middle">{ product.custodian }</td>
              <td className="align-middle">{ product.barcode }</td>
              <td className="align-middle">{ product.custodyReasonId }</td>
              <td className="align-middle">{ product.custodyReason }</td>
              <td className="align-middle">{ product.statusId }</td>
              <td className="align-middle">{ product.status }</td>
              <td className="align-middle">{ product.recoveryDate }</td>
            </tr>))
          )}
      </tbody>
    </table>
    </div >
  );
}

export default App;
