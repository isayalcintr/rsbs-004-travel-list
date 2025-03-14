import { useState } from "react";
import Item from "./Item";
function PackingList({ items, removeItem, toggleItem, clearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];
  if (sortBy === "description") {
    sortedItems = items.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "packed") {
    sortedItems = items.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (!confirmed) return;
    clearItems();
  };
  return (
    <div className="list">
      <ul>
        {sortedItems.length > 0 &&
          sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              removeItem={removeItem}
              toggleItem={toggleItem}
            />
          ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(Number(e.target.value))}
        >
          <option value="inpue">Sot by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        {sortedItems.length > 0 && (
          <button onClick={handleClearItems}>Clear List</button>
        )}
      </div>
    </div>
  );
}
export default PackingList;
