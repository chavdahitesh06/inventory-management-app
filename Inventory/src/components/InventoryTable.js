import React from "react"
import InventoryItem from "./InventoryItem"

function InventoryTable({ items, deleteItem, editItem }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <InventoryItem key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />
        ))}
      </tbody>
    </table>
  )
}

export default InventoryTable

