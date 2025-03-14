import Item from "./Item";
function PackingList({ items, removeItem, toggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.length > 0 &&
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              removeItem={removeItem}
              toggleItem={toggleItem}
            />
          ))}
      </ul>
    </div>
  );
}
export default PackingList;
