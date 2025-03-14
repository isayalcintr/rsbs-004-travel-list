import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const clearItems = () => {
    setItems([]);
  };
  const addItem = (newItem) => setItems([...items, newItem]);
  const removeItem = (id) => setItems(items.filter((item) => item.id !== id));
  const toggleItem = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        removeItem={removeItem}
        toggleItem={toggleItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
