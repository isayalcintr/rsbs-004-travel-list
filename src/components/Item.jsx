function Item({ item, removeItem, toggleItem }) {
  const handleRemoveItem = () => removeItem(item.id);
  const handleToggleItem = () => toggleItem(item.id);
  return (
    <li className="item">
      <label style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={handleToggleItem}
        />
        {item.quantity} {item.description}
      </label>
      <button onClick={handleRemoveItem}>❌</button>
    </li>
  );
}
export default Item;
