import items from "../data/items";

const Cart = () => {
  return (
    <div>
      <h1 className="text-xl font-bold"> Total: ${/* To be implemented */} </h1>
      <div>
        {/* {items.map(({ item, amount }) => (
        <div key={item.id}>
          x{amount} {item.name} (${amount * item.price})
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default Cart;
