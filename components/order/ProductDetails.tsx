import { useStore } from "@/src/store";
import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import { PlusIcon, MinusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

type ProductDetailsProps = {
  item: OrderItem;
};

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

const ProductDetails = ({ item }: ProductDetailsProps) => {
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeItem = useStore((state) => state.removeItem);
  const disableDecreaseButton = useMemo(
    () => item.quantity === MIN_ITEMS,
    [item]
  );
  const disableIncreaseButton = useMemo(
    () => item.quantity === MAX_ITEMS,
    [item]
  );

  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-xl font-bold">{item.name} </p>

          <button type="button" onClick={() => removeItem(item.id)}>
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-2xl text-amber-500 font-black">
          {formatCurrency(item.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            disabled={disableDecreaseButton}
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            className="disabled:opacity-20"
          >
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="text-lg font-black ">{item.quantity}</p>
          <button
            type="button"
            className="disabled:opacity-20"
            disabled={disableIncreaseButton}
            onClick={() => increaseQuantity(item.id)}
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-xl font-black text-gray-700">
          Subtotal: {""}
          <span className="font-normal">{formatCurrency(item.subtotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
