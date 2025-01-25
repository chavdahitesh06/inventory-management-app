import React, { useState, useEffect } from "react"
import InventoryTable from "./components/InventoryTable"
import AddItemForm from "./components/AddItemForm"
import EditItemForm from "./components/EditeItemForm"
import FilterSort from "./components/FilterSort"
import "./App.css"

function App() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    // Filter and sort items
    const filtered = selectedCategory === "All" ? items : items.filter((item) => item.category === selectedCategory)

    filtered.sort((a, b) => {
      if (sortBy === "quantity") {
        return a.quantity - b.quantity
      } else {
        return a.name.localeCompare(b.name)
      }
    })

    setFilteredItems(filtered)
  }, [items, selectedCategory, sortBy])

  useEffect(() => {
    // Update categories
    const uniqueCategories = [...new Set(items.map((item) => item.category))]
    setCategories(["All", ...uniqueCategories])
  }, [items])

  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }])
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id)
    setEditingItem(itemToEdit)
  }

  const updateItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)))
    setEditingItem(null)
  }

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <AddItemForm addItem={addItem} />
      {editingItem && <EditItemForm item={editingItem} updateItem={updateItem} />}
      <FilterSort
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <InventoryTable items={filteredItems} deleteItem={deleteItem} editItem={editItem} />
    </div>
  )
}

export default App

