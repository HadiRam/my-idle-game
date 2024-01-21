import React from 'react'
import classes from './inventory.module.scss'

interface Item {
    imageUrl: string;
    quantity: number;
}

interface InventoryProps {
    items: Item[];
    onClickInventoryItem: (item: Item) => void;
}

export const Inventory: React.FC<InventoryProps> = ({ items, onClickInventoryItem }) => {
  return (
    <><div className={classes.inventory_title}>Inventory</div>
      <div className={classes.inventory}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${classes.slot} ${item.quantity === 0 ? classes.disabled : ''}`}
            onClick={() => item.quantity > 0 && onClickInventoryItem(item)}
          >
            <span className={classes.item_quantity}>{item.quantity}</span>
            <img src={item.imageUrl} alt="Item" className={classes.item_image} />
          </div>
        ))}
      </div></>
  )
}

export default Inventory
