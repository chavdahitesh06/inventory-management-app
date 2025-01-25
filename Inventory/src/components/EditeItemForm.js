import React, { useState, useEffect } from "react"

function EditItemForm({ item, updateItem }) {
  const [name, setName] = useState(item.name)
  const [category, setCategory] = useState(item.category)
  const [quantity, setQuantity] = useState(item.quantity)

  useEffect(() => {
    setName(item.name)
    setCategory(item.category)
    setQuantity(item.quantity)
  }, [item])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && category && quantity) {
      updateItem({ ...item, name, category, quantity: Number.parseInt(quantity) })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Update Item</button>
    </form>
  )
}

export default EditItemForm

