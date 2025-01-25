import React, { useState } from "react"

function AddItemForm({ addItem }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && category && quantity) {
      addItem({ name, category, quantity: Number.parseInt(quantity) })
      setName("")
      setCategory("")
      setQuantity("")
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
      <button type="submit">Add Item</button>
    </form>
  )
}

export default AddItemForm

