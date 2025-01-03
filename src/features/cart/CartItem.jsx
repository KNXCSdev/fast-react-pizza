import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center py-3">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <p className="col-start-1 row-start-2 text-sm font-bold">
        {formatCurrency(totalPrice)}
      </p>
      <div className="col-start-2 row-span-2">
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
