import React from "react"

function InventoryItem({ item, deleteItem, editItem }) {
  return (
    <tr className={item.quantity < 10 ? "low-stock" : ""}>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.quantity}</td>
      <td>
        <div className="action-buttons">
          <button className="edit-button" onClick={() => editItem(item.id)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

export default InventoryItem

